import { storiesOf } from '@storybook/react'
import React from 'react'
import Wrapper from '../_wrapper'
import ProfileCardsDocs from './profile-cards.mdx'
import components from '../mdx-components'
import {
  ProfileCard,
  ProfileCardGroup,
  ProfileCardHeader,
  ProfileCardItem,
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownList
} from '../index'

const ProfileCardDropdown = () => (
  <Dropdown>
    <DropdownButton className="text-gray-400 text-xl mx-20">...</DropdownButton>
    <DropdownList>
      <DropdownItem isLink href="#">
        Edit member details
      </DropdownItem>
      <DropdownItem
        onSelect={() => {
          return
        }}
      >
        Edit member status
      </DropdownItem>
      <DropdownItem
        onSelect={() => {
          return
        }}
      >
        Assign club officer role
      </DropdownItem>
    </DropdownList>
  </Dropdown>
)

storiesOf('parts/profile-cards', module)
  .add('Profile Card', () => {
    return (
      <Wrapper title="Profile Card">
        <ProfileCardGroup cid="my-card-group">
          <ProfileCard selectable handleSelect={() => { alert('selected') }}>
            <ProfileCardHeader heading="Deepika Vekatesh">
              <span className="break-all">deepika.venkatesh@gmail.com</span>{' '}
              <br />
              +91 123-456-7890 <br />
              ID# 12345678
            </ProfileCardHeader>
            <ProfileCardItem>
              E/1 2nd. Flr. <br />
              1234 G.N. Chetty Rd. <br />
              Madras, 600017, India <br />
              Tamil Nadu
            </ProfileCardItem>
            <ProfileCardItem label="Previous Club Affiliation">
              Delhi Garden City Rotary Club New Delhi, Delhi, India <br />
              Terminated: June 12, 2018
            </ProfileCardItem>
          </ProfileCard>

          <ProfileCard selectable url="#">
            <ProfileCardHeader heading="Deepika Vekatesh">
              President <br />
              Member since 2015
            </ProfileCardHeader>
            <ProfileCardItem>
              <a className="break-all" href="#">
                deepika.venkatesh@gmail.com
              </a>{' '}
              <br />
              +91 123-456-7890
            </ProfileCardItem>
          </ProfileCard>

          <ProfileCard dropdown={<ProfileCardDropdown />}>
            <ProfileCardHeader heading="Deepika Vekatesh">
              President <br />
              Member since 2015
            </ProfileCardHeader>
            <ProfileCardItem>
              <a className="break-all" href="#">
                deepika.venkatesh@gmail.com
              </a>{' '}
              <br />
              +91 123-456-7890
            </ProfileCardItem>
          </ProfileCard>

          <ProfileCard dropdown={<ProfileCardDropdown />}>
            <ProfileCardHeader
              isAssignable
              label="President"
              heading="Deepika Vekatesh"
            >
              Served since 2018-2019
            </ProfileCardHeader>
          </ProfileCard>

          <ProfileCard>
            <ProfileCardHeader
              onClick={() => {
                console.log('hey') // tslint:disable-line:no-console
              }}
              isAssignable
              empty
              label="President"
            />
          </ProfileCard>

          <ProfileCard>
            <ProfileCardHeader
              href="#"
              isAssignable
              empty
              unassignedText="Add a New Assistant Governor"
            />
          </ProfileCard>
        </ProfileCardGroup>
      </Wrapper>
    )
  })
  .add('Profile Card Docs', () => {
    return (
      <Wrapper>
        <ProfileCardsDocs components={components} />
      </Wrapper>
    )
  })
