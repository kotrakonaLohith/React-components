import { storiesOf } from '@storybook/react'
import React from 'react'
import Wrapper from '../_wrapper'
import { Dropdown, DropdownItem, DropdownList, DropdownButton } from '../index'
import DownIcon from '../../../img/icons/arrows/down.svg'
import UserIcon from '../../../img/icons/circles/user.svg'
import DropdownDocs from './dropdowns.mdx'
import components from '../mdx-components'

storiesOf('parts/dropdowns', module)
  .add('Standard Dropdown', () => {
    return (
      <Wrapper title="Dropdown">
        <div className="bg-dark-blue-500 p-40">
          <Dropdown>
            <DropdownButton className="text-white">
              English{' '}
              <DownIcon
                aria-hidden="true"
                className="text-white rect-icon-3xs ml-4"
              />
            </DropdownButton>
            <DropdownList>
              <DropdownItem
                onSelect={() => {
                  console.log('French') /* tslint:disable-line:no-console */
                }}
              >
                French
              </DropdownItem>
              <DropdownItem
                onSelect={() => {
                  console.log('German') /* tslint:disable-line:no-console */
                }}
              >
                German
              </DropdownItem>
              <DropdownItem
                onSelect={() => {
                  console.log('Chinese') /* tslint:disable-line:no-console */
                }}
              >
                Chinese
              </DropdownItem>
              <DropdownItem isLink href="#">
                Dropdown Link
              </DropdownItem>
            </DropdownList>
          </Dropdown>
        </div>
      </Wrapper>
    )
  })
  .add('Complex Dropdown', () => {
    return (
      <Wrapper title="Complex Drodown">
        <div className="bg-dark-blue-500 p-40">
          <Dropdown>
            <DropdownButton className="text-white flex items-center">
              <UserIcon
                aria-hidden="true"
                className="rect-icon text-bright-blue-500 fill-dark mr-8"
              />
              My Account{' '}
              <DownIcon
                aria-hidden="true"
                className="text-white rect-icon-3xs ml-4"
              />
            </DropdownButton>
            <DropdownList>
              <DropdownItem className="group" isHeader onSelect={() => false}>
                <UserIcon
                  aria-hidden="true"
                  className="rect-icon-xl text-bright-blue-500 fill-white"
                />
                <p className="ml-16 text-xl leading-normal">
                  Deepika Venkatesh
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
            </DropdownList>
          </Dropdown>
        </div>
      </Wrapper>
    )
  })
  .add('Overflow Dropdown', () => {
    return (
      <Wrapper title="Overflow Dropdown">
        <div className="bg-dark-blue-500 p-40">
          <Dropdown>
            <DropdownButton className="text-white text-3xs tracking-wide">
              ...
            </DropdownButton>
            <DropdownList>
              <DropdownItem isLink href="#">
                Overflow Entity
              </DropdownItem>
              <DropdownItem isLink href="#">
                Overflow Entity
              </DropdownItem>
              <DropdownItem isLink href="#">
                Overflow Entity
              </DropdownItem>
              <DropdownItem
                className="px-20 py-24 bg-gray-300 hover:bg-red-200"
                unstyled
                isLink
                href="#"
              >
                Override Default Styles
              </DropdownItem>
            </DropdownList>
          </Dropdown>
        </div>
      </Wrapper>
    )
  })
  .add('Viewing as... Dropdown', () => {
    return (
      <Wrapper title="Viewing as... Dropdown">
        <Dropdown>
          <DropdownButton className="text-base text-left leading-normal">
            Viewing profile as{' '}
            <span className="text-dark-blue-400 border-b border-dashed border-dark-blue-400">
              Deepika
            </span>
            <DownIcon
              aria-hidden="true"
              className="text-dark-blue-400 rect-icon-xxs ml-10"
            />
          </DropdownButton>
          <DropdownList>
            <DropdownItem
              onSelect={() => {
                alert('handle selection')
              }}
            >
              Deepika
            </DropdownItem>
            <DropdownItem
              onSelect={() => {
                alert('handle selection')
              }}
            >
              Officers of My Club and District
            </DropdownItem>
            <DropdownItem
              onSelect={() => {
                alert('handle selection')
              }}
            >
              Members of My Club
            </DropdownItem>
            <DropdownItem
              onSelect={() => {
                alert('handle selection')
              }}
            >
              Members of My District
            </DropdownItem>
            <DropdownItem
              onSelect={() => {
                alert('handle selection')
              }}
            >
              All Rotary Members
            </DropdownItem>
          </DropdownList>
        </Dropdown>
      </Wrapper>
    )
  })
  .add('Dropdown Docs', () => {
    return (
      <Wrapper>
        <DropdownDocs components={components} />
      </Wrapper>
    )
  })
