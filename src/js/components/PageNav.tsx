import React, {
  FC,
  AnchorHTMLAttributes,
  ReactElement,
  Component,
  createRef
} from 'react'
import debounce from 'lodash.debounce'
import cx from 'classnames'
import OverflowList from './OverflowList'
import { Menu, MenuList, MenuButton, MenuLink } from '@reach/menu-button'
import DownIcon from '../../img/icons/arrows/down.svg'
import TailwindConfig from '#tailwind'

type Link = AnchorHTMLAttributes<HTMLAnchorElement>

interface PageNavProps {
  active: string
  className?: string
}

interface PageNavState {
  screenLg: boolean
  width: number
}

export interface PageNavItemProps extends Link {
  active?: boolean
  children: string
  first?: boolean
  href: string
  isLg?: boolean
  last?: boolean
}

interface DesktopNavItemProps extends Link {
  active: boolean
  children: string
  first: boolean
  href: string
  last: boolean
}

interface MobileNavItemProps {
  href: string
}

const MobileNav: FC<{ button: string; className?: string; width: number }> = ({
  button,
  className,
  children,
  width
}) => (
  <Menu>
    <MenuButton
      className={cx(
        'page-nav-dropdown-button flex border w-full justify-between items-center py-11 px-16 text-xs rounded-px',
        className
      )}
    >
      {button}{' '}
      <DownIcon
        aria-hidden="true"
        className="text-bright-blue-600 rect-icon-xs"
      />
    </MenuButton>
    <MenuList
      style={{ width: `${width}px` }}
      className="border bg-white -mt-px"
    >
      {children}
    </MenuList>
  </Menu>
)

const MobileNavItem: FC<MobileNavItemProps> = ({ children, ...props }) => (
  <MenuLink
    className="group px-20 py-16 block no-underline text-gray-600 focus:antialiased focus:font-bold focus:text-white focus:bg-dark-blue-400"
    component="a"
    to={props.href}
    {...props}
  >
    {children}
  </MenuLink>
)

const DesktopNav: FC<{ className?: string }> = ({ children, className }) => (
  <OverflowList
    windowQuery={`(min-width: ${TailwindConfig.screens.md})`}
    dark
    className={cx('page-nav flex list-reset py-4', className)}
  >
    {children}
  </OverflowList>
)

const DesktopNavItem: FC<DesktopNavItemProps> = ({
  active,
  first,
  last,
  children,
  ...props
}) => (
  <li
    className={cx('whitespace-no-wrap page-nav__item', {
      '-active': active
    })}
  >
    <a
      className={cx(
        'block no-underline py-12 leading-normal hover:text-dark-blue-400 focus:text-dark-blue-400',
        {
          'px-21': active,
          'px-12': !first && !last,
          'pr-12': first && !active,
          'pl-12': last && !active,
          'text-gray-600': !active,
          'text-dark-blue-400': active
        }
      )}
      {...props}
    >
      {children}
    </a>
  </li>
)

class PageNav extends Component<PageNavProps, PageNavState> {
  debouncedCheckScreenWidth: () => any
  screenMq: MediaQueryList
  menuRef = createRef<HTMLDivElement>()

  state = {
    screenLg: false,
    width: 0
  }

  componentDidMount() {
    this.screenMq = window.matchMedia(
      `(min-width: ${TailwindConfig.screens.md})`
    )
    this.debouncedCheckScreenWidth = debounce(this.checkScreenWidth, 50)
    this.checkScreenWidth()
    window.addEventListener('resize', this.debouncedCheckScreenWidth)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.debouncedCheckScreenWidth)
  }

  checkScreenWidth = () => {
    this.setState({
      screenLg: this.screenMq.matches
    })

    if (this.menuRef.current) {
      this.setState({
        width: this.menuRef.current.offsetWidth
      })
    }
  }

  render() {
    const { active, children, className } = this.props
    const { screenLg, width } = this.state
    let activeChild = ''
    const clones = React.Children.map(
      children,
      (child: ReactElement<PageNavItemProps>, index) => {
        activeChild =
          active === child.props.href ? child.props.children : activeChild

        if (active === child.props.href && !screenLg) {
          return
        }

        return React.cloneElement(child, {
          active: active === child.props.href,
          first: index === 0,
          isLg: screenLg,
          last: index + 1 === React.Children.count(children)
        })
      }
    )

    if (screenLg) {
      return <DesktopNav className={className}>{clones}</DesktopNav>
    }

    return (
      <div ref={this.menuRef}>
        <MobileNav className={className} button={activeChild} width={width}>
          {clones}
        </MobileNav>
      </div>
    )
  }
}

export const PageNavItem: FC<PageNavItemProps> = ({
  active,
  children,
  first,
  last,
  isLg = true,
  ...props
}) => {
  if (isLg) {
    return (
      <DesktopNavItem first={first!} last={last!} active={active!} {...props}>
        {children}
      </DesktopNavItem>
    )
  }

  return <MobileNavItem {...props}>{children}</MobileNavItem>
}

export default PageNav
