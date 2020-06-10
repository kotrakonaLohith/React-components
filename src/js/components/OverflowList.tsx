import React, {
  Component,
  createRef,
  ReactNodeArray,
  ReactElement
} from 'react'
import { debounce } from 'lodash'
import cx from 'classnames'
import Dropdown, {
  DropdownItem,
  DropdownList,
  DropdownButton
} from './Dropdown'
import { NavItemProps } from './Nav'
import { PageNavItemProps } from './PageNav'

interface Props {
  className?: string
  dark?: boolean
  windowQuery: string
}

interface State {
  itemsWidth: number
  itemsWidths: number[]
  overflowItems: ReactNodeArray | null
  visibleItems: ReactNodeArray | null
  width: number
}

class OverflowList extends Component<Props, State> {
  ref = createRef<HTMLUListElement>()
  screenMq: MediaQueryList
  clones: ReactNodeArray | null = null
  debouncedResetOverflow: () => any

  get isLgSize() {
    return this.screenMq.matches
  }

  constructor(props: Props) {
    super(props)

    this.state = {
      itemsWidth: 0,
      itemsWidths: [],
      overflowItems: null,
      visibleItems: null,
      width: 0
    }
  }

  componentDidMount() {
    this.screenMq = window.matchMedia(this.props.windowQuery)

    if (!this.props.children) {
      return
    }

    this.setupOverflow()
    this.debouncedResetOverflow = debounce(this.resetOverflow, 50)
    window.addEventListener('resize', this.debouncedResetOverflow)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.debouncedResetOverflow)
  }

  renderOverflowItem(
    { props }: { props: NavItemProps & PageNavItemProps },
    index: number
  ) {
    return (
      <DropdownItem key={index} isLink href={props.url || props.href}>
        {props.label || props.children}
      </DropdownItem>
    )
  }

  render() {
    const { visibleItems, overflowItems } = this.state
    const { children, className, dark } = this.props

    return (
      <ul
        ref={this.ref}
        className={cx(className, 'list-reset overflow-hidden')}
      >
        {visibleItems || children}
        {overflowItems && (
          <Dropdown>
            <DropdownButton
              className={cx('text-3xs my-10 tracking-wide pl-24 border-b-3 border-transparent', {
                'text-gray-600': dark,
                'text-white': !dark
              })}
            >
              ...
            </DropdownButton>
            <DropdownList>
              {overflowItems.map(this.renderOverflowItem)}
            </DropdownList>
          </Dropdown>
        )}
      </ul>
    )
  }

  resetOverflow = () => {
    if (!this.isLgSize) {
      return
    }

    this.setState({
      visibleItems: null,
      overflowItems: null
    })

    this.setupOverflow()
  }

  setupOverflow() {
    const { children } = this.props
    const node = this.ref.current!
    const width = node.offsetWidth
    const itemsWidths: number[] = []
    let itemsWidth = 0

    Array.prototype.slice
      .call(node.childNodes)
      .map((child: any, index: number) => {
        let localWidth = child.offsetWidth

        if (index > 0) {
          localWidth = child.offsetWidth + itemsWidths[index - 1]
        }

        itemsWidths[index] = localWidth
        itemsWidth = localWidth
        return child
      })

    this.clones = React.Children.map(
      children,
      (child: ReactElement<NavItemProps>) => {
        return child
      }
    )

    if (itemsWidth > width && this.isLgSize) {
      const firstPastWidth =
        itemsWidths.find(w => {
          return w > width - 58 // ~ width of dropdown btn + 20px padding
        }) || 0
      const indexOfFirstPastWidth = itemsWidths.indexOf(firstPastWidth)

      this.setState({
        visibleItems: this.clones
          ? this.clones.slice(0, indexOfFirstPastWidth)
          : null,
        overflowItems: this.clones
          ? this.clones.slice(indexOfFirstPastWidth)
          : null
      })
    } else {
      this.setState({
        visibleItems: null,
        overflowItems: null
      })
    }

    this.setState({
      width,
      itemsWidths,
      itemsWidth
    })
  }
}

export default OverflowList
