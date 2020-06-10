import { storiesOf } from '@storybook/react'
import React from 'react'
import Wrapper from '../_wrapper'
import { ProfileHeader } from '../index'
import ProfileHeaderDocs from './profile-header.mdx'
import components from '../mdx-components'
import sampleAvatar from '../../../img/samples/avatar-image.png'

storiesOf('parts/profile-header', module)
  .add('Profile Header', () => {
    return (
      <Wrapper title="Profile Header">
        <ProfileHeader
          className="mb-24"
          name="Deepika Venkatesh"
          role="Member"
          locations="Delhi South Metropolitan, New Delhi, Delhi, India (Rotary Club)"
        />
        <ProfileHeader
          name="Deepika Venkatesh"
          role="Member"
          locations="Delhi South Metropolitan, New Delhi, Delhi, India (Rotary Club)"
          photo={sampleAvatar}
        />
      </Wrapper>
    )
  })
  .add('Profile Header Docs', () => {
    return (
      <Wrapper>
        <ProfileHeaderDocs components={components} />
      </Wrapper>
    )
  })
