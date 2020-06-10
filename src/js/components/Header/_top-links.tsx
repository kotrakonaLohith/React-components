import React, { Fragment, FC } from 'react'
import cx from 'classnames'
import LangDropdown from './_lang-dropdown'
import UserDropdown from './_user-dropdown'
import { DropdownItem } from '../Dropdown'
import UserIcon from '../../../img/icons/circles/user.svg'

export interface TopLinksProps {
  isLoggedIn?: boolean
  photo?: string
  userName?: string
}

interface TopLinksLinkProps {
  isAuth?: boolean
  url: string
}

const TopLinksLink: FC<TopLinksLinkProps> = ({
  isAuth = false,
  children,
  url
}) => (
  <a
    className={cx('text-xs no-underline block mb-20 lg:mb-0 lg:ml-32', {
      'text-white': !isAuth,
      'text-gold-500': isAuth
    })}
    href={url}
  >
    {children}
  </a>
)
const TopLinks: FC<TopLinksProps> = ({
  isLoggedIn = false,
  userName,
  photo
}) => (
  <Fragment>
    <LangDropdown className="text-white mb-20 lg:mb-0 lg:ml-32" />
    <TopLinksLink url="#">Help</TopLinksLink>
    {isLoggedIn ? (
      <UserDropdown className="text-white mb-20 lg:mb-0 lg:ml-32">
        {/* @TODO functionality */}
        <DropdownItem
          isHeader
          className="group"
          onSelect={() => console.log('edit profile')} // tslint:disable-line
        >
          {photo ? (
            <img src={photo} alt="" />
          ) : (
            <UserIcon
              aria-hidden="true"
              className="rect-icon-xl text-bright-blue-500 fill-white"
            />
          )}
          <p className="ml-16 text-xl leading-normal">
            {userName}{' '}
            <span className="block text-dark-blue-400 text-xs group-hover:underline">
              Add Photo
            </span>
          </p>
        </DropdownItem>
        <DropdownItem isLink href="#">
          My Profile
        </DropdownItem>
        <DropdownItem isLink href="#">
          My Donations
        </DropdownItem>
        <DropdownItem isLink href="#">
          Account Settings
        </DropdownItem>
        <DropdownItem hasBorder isLink href="#">
          Sign Out
        </DropdownItem>
      </UserDropdown>
    ) : (
      <Fragment>
        <TopLinksLink isAuth url="#">
          Sign In
        </TopLinksLink>
        <TopLinksLink isAuth url="#">
          Register
        </TopLinksLink>
      </Fragment>
    )}
  </Fragment>
)

export default TopLinks
