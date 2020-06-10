import React, { Component, ReactNode } from 'react'
import cx from 'classnames'
import TopLinks, { TopLinksProps } from './_top-links'
import MultiSubmitInput, {
  MultiSubmitInputOption
} from '../Forms/MultiSubmitInput'
import LogoWhite from '../../../img/icons/logos/logo-white.svg'
import CloseIcon from '../../../img/icons/ui/close.svg'
import HamburgerIcon from '../../../img/icons/ui/hamburger.svg'
import SearchIcon from '../../../img/icons/ui/search.svg'
import PagesIcon from '../../../img/icons/ui/pages.svg'
import PeopleIcon from '../../../img/icons/ui/people.svg'
import MapPinIcon from '../../../img/icons/ui/map-pin.svg'
import TailwindConfig from '#tailwind'

interface State {
  open: boolean
  ready: boolean
}

interface HeaderProps {
  children: {
    nav: ReactNode
  }
  hasEntities?: boolean
}

export default class Header extends Component<
  TopLinksProps & HeaderProps,
  State
> {
  screenLg: MediaQueryList

  state = {
    open: true, // starts open for lg | hidden by css for sm & md
    ready: false
  }

  componentDidMount() {
    this.screenLg = window.matchMedia(
      `(min-width: ${TailwindConfig.screens.lg})`
    )

    window.addEventListener('resize', this.handleWindowResize)

    this.setState({
      ready: true,
      open: this.screenLg.matches
    })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize)
  }

  render() {
    const { ready, open } = this.state
    const { nav } = this.props.children
    const { hasEntities } = this.props

    return (
      <header
        className={cx(
          'relative border-b-2 border-gray-100 md:border-none lg:pb-0 lg:pt-20 lg:px-24 lg:bg-dark-blue-500',
          { 'lg:mb-48': !!hasEntities }
        )}
      >
        <div className="relative flex max-w-container mx-auto bg-dark-blue-500 lg:bg-none justify-between items-center px-16 md:px-24 lg:px-0 py-20 md:py-12 lg:py-0 lg:pb-24 md:shadow lg:shadow-none">
          <button
            onClick={this.handleToggle}
            className="lg:hidden rect-icon-md flex items-center justify-center"
          >
            {!open || !ready ? (
              <HamburgerIcon
                aria-hidden="true"
                className="rect-icon-md text-bright-blue-300"
              />
            ) : (
              <CloseIcon
                aria-hidden="true"
                className="rect-icon-sm text-bright-blue-300"
              />
            )}
          </button>
          <h1>
            <a
              className="block flex text-white no-underline text-lg antialiased items-center"
              href="#TODO"
            >
              <LogoWhite
                aria-hidden="true"
                className="rect-logo hidden md:block"
              />
              <span className="block md:ml-12 md:pl-12 md:border-l md:border-dark-blue-400">
                My Rotary
              </span>
            </a>
          </h1>
          <a href="#TODO" className="lg:hidden">
            <SearchIcon
              aria-hidden="true"
              className="rect-icon text-bright-blue-300"
            />
          </a>

          <aside className="items-center hidden lg:flex">
            <MultiSubmitInput
              label="Site Search"
              id="site-search"
              name="search"
              placeholder="Search Site"
            >
              <MultiSubmitInputOption urlParam="" icon={<PagesIcon />}>
                Search the site
              </MultiSubmitInputOption>
              <MultiSubmitInputOption urlParam="members" icon={<PeopleIcon />}>
                Find a member
              </MultiSubmitInputOption>
              <MultiSubmitInputOption urlParam="clubs" icon={<MapPinIcon />}>
                Find a club
              </MultiSubmitInputOption>
            </MultiSubmitInput>
            <TopLinks {...this.props} />
          </aside>
        </div>
        {/* makes sure this is visible before component mounts & when `open` */}
        {(open || !ready) && (
          <div
            className={cx(
              'max-w-container lg:mx-auto md:w-1/2 lg:w-auto bg-dark-blue-500 lg:bg-none pt-8 md:pt-16 lg:pt-0 pb-20 lg:flex lg:justify-between lg:items-end lg:max-w-container lg:mx-auto',
              {
                hidden: !ready // load hidden (sm and md) before screen size is determined
              }
            )}
          >
            {nav}
            <aside className="flex px-40 lg:px-0">
              <a
                className="min-w-button text-center bg-dark-blue-400 text-white block no-underline uppercase text-2xs px-24 py-16 rounded-sm tracking-wide font-bold hover:bg-bright-blue-600 focus:bg-bright-blue-600"
                href="#"
              >
                Join
              </a>
              <a
                className="min-w-button text-center bg-dark-blue-400 text-white block no-underline uppercase text-2xs px-24 py-16 rounded-sm tracking-wide font-bold hover:bg-bright-blue-600 focus:bg-bright-blue-600 ml-8"
                href="#"
              >
                Donate
              </a>
            </aside>
            <div className="p-40 lg:hidden">
              <TopLinks {...this.props} />
            </div>
          </div>
        )}
      </header>
    )
  }

  handleToggle = () => {
    this.setState((prevState: State) => ({
      open: !prevState.open
    }))
  }

  handleWindowResize = () => {
    if (this.screenLg.matches === this.state.open) {
      return
    }
    this.handleToggle()
  }
}
