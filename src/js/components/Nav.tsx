import React, { FC } from 'react'
import OverflowList from './OverflowList'
import cx from 'classnames'
import RightIcon from '../../img/icons/arrows/right.svg'
import TailwindConfig from '#tailwind'

export interface NavItemProps {
  active?: boolean
  first?: boolean
  label: string
  url: string
}

export const NavLink: FC<NavItemProps> = ({
  label,
  url,
  first = false,
  active = false,
  children
}) => (
  <li className={cx({ 'lg:ml-40': !first })}>
    <a
      className={cx(
        'antialiased block py-16 px-40 lg:px-0 font-bold no-underline',
        {
          'text-white hover:text-gold-500 focus:text-gold-500': !active,
          'text-gold-500': active
        }
      )}
      href={url}
    >
      {label}
    </a>
    {active && children}
  </li>
)

export const SubNavLink: FC<NavItemProps> = ({
  label,
  url,
  first = false,
  active = false
}) => (
  <li className={cx({ 'pl-24': !first })}>
    <a
      className={cx(
        'block py-16 uppercase no-underline text-3xs font-bold lg:border-b-3 whitespace-no-wrap',
        {
          'lg:border-transparent text-white hover:text-gold-500 focus:text-gold-500': !active,
          'lg:border-gold-600 text-gold-500': active
        }
      )}
      href={url}
    >
      {active && (
        <RightIcon aria-hidden="true" className="rect-icon-xxs mr-12 lg:hidden" />
      )}
      {label}
    </a>
  </li>
)

export const SubNav: FC = ({ children }) => (
  <div className="bg-dark-blue-600 px-40 lg:px-24 py-16 lg:py-0 lg:absolute lg:pin-x lg:pos-after">
    <OverflowList
      windowQuery={`(min-width: ${TailwindConfig.screens.lg})`}
      className="max-w-container lg:mx-auto lg:flex"
    >
      {children}
    </OverflowList>
  </div>
)

const Nav: FC = ({ children }) => (
  <nav>
    <ul className="list-reset max-w-container mx-auto mb-40 lg:mb-0 lg:flex">
      {children}
    </ul>
  </nav>
)

export default Nav
