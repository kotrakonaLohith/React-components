import React from 'react'
import { Header, Nav, SubNav, NavLink, SubNavLink } from '../../index'
import data from './data.json'

interface NavItem {
  label: string
  active?: boolean
  url: string
  subnav?: NavItem[]
}
type NavShape = NavItem[]
const navData: NavShape = data.nav
const navDataNoEntities: NavShape = data.navNoEntities

const renderSubNavItem = (item: NavItem, index: number) => (
  <SubNavLink
    active={item.active}
    first={index === 0}
    key={item.label}
    label={item.label}
    url={item.url}
  />
)

const renderNavItem = (item: NavItem, index: number) => {
  if (item.subnav) {
    return (
      <NavLink
        active={item.active}
        first={index === 0}
        key={item.label}
        label={item.label}
        url={item.url}
      >
        <SubNav>{item.subnav.map(renderSubNavItem)}</SubNav>
      </NavLink>
    )
  } else {
    return (
      <NavLink
        active={item.active}
        first={index === 0}
        key={item.label}
        label={item.label}
        url={item.url}
      />
    )
  }
}

export const MainHeader = () => {
  const activeItem = navData.find(navItem => !!navItem.active)
  const subnav = activeItem && activeItem.subnav ? activeItem.subnav : []

  return (
    <Header hasEntities={subnav.length > 0} isLoggedIn userName="Deepika Venkatesh">
      {{
        nav: <Nav>{navData.map(renderNavItem)}</Nav>
      }}
    </Header>
  )
}
export const NoEntitiesHeader = () => (
  <Header isLoggedIn userName="Deepika Venkatesh">
    {{
      nav: <Nav>{navDataNoEntities.map(renderNavItem)}</Nav>
    }}
  </Header>
)
export const LoggedOutHeader = () => (
  <Header>
    {{
      nav: <Nav>{navDataNoEntities.map(renderNavItem)}</Nav>
    }}
  </Header>
)
