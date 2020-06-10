import { storiesOf } from '@storybook/react'
import React from 'react'
import Wrapper from '../../../_wrapper'
import LeftIcon from '../../../../../img/icons/arrows/left.svg'

storiesOf('components/pages/MembersProfileEdit', module).add(
  'Edit Areas of Expertise',
  () => {
    return (
      <Wrapper>
        <div className="mb-32">
          <a href="#" className="heading-topper">
            <LeftIcon aria-hidden="true" /> Profile
          </a>
          <h1 className="heading-primary">Edit Personal Details</h1>
        </div>
      </Wrapper>
    )
  }
)
