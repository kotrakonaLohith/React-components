import React, { FC } from 'react'
import cx from 'classnames'
import Dropdown, { DropdownList, DropdownButton } from '../Dropdown'
import DownIcon from '../../../img/icons/arrows/down.svg'
import UserIcon from '../../../img/icons/circles/user.svg'

interface Props {
  className?: string
}

const UserDropdown: FC<Props> = ({ className, children }) => {
  return (
    <Dropdown>
      <DropdownButton className={cx(className, 'flex items-center')}>
        <UserIcon aria-hidden="true" className="rect-icon text-bright-blue-500 fill-dark mr-8" />
        My Account <DownIcon aria-hidden="true" className="text-white rect-icon-3xs ml-4" />
      </DropdownButton>
      <DropdownList>
        {children}
      </DropdownList>
    </Dropdown>
  )
}

export default UserDropdown