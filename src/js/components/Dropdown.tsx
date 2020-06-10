import React, { FC } from 'react'
import cx from 'classnames'
import {
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  MenuLink
} from '@reach/menu-button'

interface DropdownItemProps {
  className?: string
  hasBorder?: boolean
  href?: never
  isHeader?: boolean
  isLink?: false
  onSelect: () => void
  unstyled?: boolean
}

interface DropdownLinkProps {
  className?: string
  hasBorder?: boolean
  href: string
  isHeader?: boolean
  isLink: true
  onSelect?: never
  unstyled?: boolean
}

interface DropdownButtonProps {
  className?: string
}

export const Dropdown: FC = ({ children }) => <Menu>{children}</Menu>

export const DropdownButton: FC<DropdownButtonProps> = ({
  children,
  className
}) => (
  <MenuButton className={cx('text-xs', className)}>
    {children}
  </MenuButton>
)

export const DropdownList: FC = ({ children }) => {
  return (
    <MenuList className="mt-8 border bg-white dropdown-list sm:min-w-small">
      {children}
    </MenuList>
  )
}

export const DropdownItem: FC<DropdownLinkProps | DropdownItemProps> = ({
  children,
  className,
  hasBorder,
  isHeader,
  isLink,
  unstyled,
  ...props
}) => {
  const classes = cx(className, {
    'focus:antialiased focus:font-bold focus:text-white focus:bg-dark-blue-400 px-20':
      !unstyled && !isHeader,
    'py-16': !hasBorder && !isHeader,
    'pb-20': hasBorder,
    'pt-28 px-20': isHeader
  })

  const renderContent = (border?: boolean, header?: boolean) => {
    if (border) {
      return (
        <div className="border-t border-gray-200 pt-20 group-hover:border-transparent">
          {children}
        </div>
      )
    } else if (header) {
      return (
        <div className="flex items-center border-b border-gray-200 pb-24 ">
          {children}
        </div>
      )
    } else {
      return children
    }
  }

  if (isLink) {
    return (
      <MenuLink
        className={cx(classes, 'block no-underline text-gray-600 group')}
        component="a"
        to={props.href}
        {...props}
      >
        {renderContent(hasBorder, isHeader)}
      </MenuLink>
    )
  } else {
    return (
      <MenuItem className={classes} {...props}>
        {renderContent(hasBorder, isHeader)}
      </MenuItem>
    )
  }
}

export default Dropdown
