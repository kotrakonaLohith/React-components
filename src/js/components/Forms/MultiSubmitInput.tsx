import React, {
  Component,
  ChangeEvent,
  KeyboardEvent,
  FC,
  ReactElement
} from 'react'
import uuidv1 from 'uuid/v1'
import cx from 'classnames'
import Input from './Input'
import SearchIcon from '../../../img/icons/ui/search.svg'

interface MultiSubmitInputState {
  focused: boolean
  value: string
  currentItem: number
}

interface MultiSubmitInputProps {
  label: string
  id: string
  placeholder: string
  name: string
}

interface MultiSubmitInputOptionProps {
  icon?: ReactElement
  urlParam: string
  handleClick?: () => void
  handleKeyDown?: (e?: KeyboardEvent<HTMLButtonElement>) => void
  handleFocus?: () => void
}

export default class MultiSubmitInput extends Component<
  MultiSubmitInputProps,
  MultiSubmitInputState
> {
  uuid: string = uuidv1()

  state = {
    focused: false,
    value: '',
    currentItem: -1
  }

  list = React.createRef<HTMLDivElement>()
  wrapper = React.createRef<HTMLDivElement>()

  get input() {
    return this.wrapper.current
      ? this.wrapper.current.querySelector('input')
      : null
  }

  get nodeList() {
    return this.list.current
      ? this.list.current.querySelectorAll('button')
      : null
  }

  render() {
    const { focused, value } = this.state
    const { children, name, ...props } = this.props

    const clones = React.Children.map(
      children,
      (child: ReactElement<MultiSubmitInputOptionProps>, index: number) => {
        // @TODO revisit when implementing goToUrl (use bubbling rather than cloneElement?)
        return React.cloneElement(child, {
          handleClick: () => {
            this.goToUrl(child.props.urlParam)
          },
          handleKeyDown: this.handleListKeyDown,
          handleFocus: () => {
            this.handleListItemFocus(index)
          }
        })
      }
    )

    return (
      <div ref={this.wrapper} className="relative">
        <Input
          active={focused || value !== ''}
          hideLabel
          icon={!focused && value === '' ? <SearchIcon /> : undefined}
          isRounded
          name={`${name}_${this.uuid}`}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onKeyDown={this.handleKeyDown}
          reset={this.reset}
          value={value}
          {...props}
        />
        <div
          className={cx(
            'absolute pos-after pin-x border-l border-r border-b bg-white z-top',
            { hidden: value === '' }
          )}
        >
          <p className="font-bold px-15 pt-15 pb-8">Select One</p>
          <div ref={this.list}>{clones}</div>
        </div>
      </div>
    )
  }

  // @TODO need more information about implementation to finish this
  goToUrl = (urlParam: string) => {
    if (urlParam !== '') {
      console.log( // tslint:disable-line
        `?section=${encodeURI(urlParam)}&q=${encodeURI(this.state.value)}`
      )
    } else {
      console.log(`?q=${encodeURI(this.state.value)}`) // tslint:disable-line
    }
  }

  handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (this.state.value === '') {
      return
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      this.moveFocusDown()
    }

    if (e.key === 'Enter') {
      this.goToUrl('')
    }

    if (e.key === 'Escape') {
      this.reset()
    }
  }

  handleListKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      this.moveFocusDown()
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault()
      this.moveFocusUp()
    }

    if (e.key === 'Escape') {
      this.focusInput()
      this.reset()
    }
  }

  handleFocus = () => {
    this.setState({
      focused: true,
      currentItem: -1
    })
  }

  handleBlur = () => {
    this.setState({
      focused: false
    })
  }

  handleListItemFocus(index: number) {
    this.setState({
      currentItem: index
    })
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: e.currentTarget.value
    })
  }

  reset = () => {
    this.setState({
      currentItem: -1,
      value: ''
    })
  }

  moveFocusDown() {
    const { currentItem } = this.state
    const { children } = this.props

    if (React.Children.count(children) - 1 <= currentItem) {
      return
    }

    if (this.nodeList) {
      this.nodeList[currentItem + 1].focus()
    }
  }

  moveFocusUp() {
    const { currentItem } = this.state

    if (0 >= currentItem) {
      this.focusInput()
      return
    }

    if (this.nodeList) {
      this.nodeList[currentItem - 1].focus()
    }
  }

  focusInput() {
    if (this.input) {
      this.input.focus()
    }
  }
}

export const MultiSubmitInputOption: FC<MultiSubmitInputOptionProps> = ({
  children,
  handleFocus,
  handleClick,
  handleKeyDown,
  icon
}) => {
  return (
    <button
      className="group antialiased flex items-center p-15 w-full hover:bg-dark-blue-400 focus:bg-dark-blue-400 hover:text-white focus:text-white hover:font-bold focus:font-bold"
      onClick={handleClick}
      onFocus={handleFocus}
      onKeyDown={handleKeyDown}
    >
      {icon &&
        React.cloneElement(icon, {
          'aria-hidden': true,
          className: "text-bright-blue-600 rect-icon mr-16 group-hover:text-white"
        })
      }
      {children}
    </button>
  )
}
