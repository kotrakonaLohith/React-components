import { storiesOf } from '@storybook/react'
import React from 'react'
import Wrapper from '../_wrapper'
import { Notification } from '../index'
import NotificationDocs from './notifications.mdx'
import components from '../mdx-components'

storiesOf('parts/notifications', module)
  .add('Notification', () => {
    return (
      <Wrapper title="Notification">
        <Notification className="mb-20">
          <p>
            This is a neutral message. <a href="#">Link</a>
          </p>
        </Notification>
      </Wrapper>
    )
  })
  .add('Notification Docs', () => {
    return (
      <Wrapper>
        <NotificationDocs components={components} />
      </Wrapper>
    )
  })
