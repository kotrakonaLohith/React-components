import { storiesOf } from '@storybook/react'
import React from 'react'
import Wrapper from '../_wrapper'
import {Avatar} from '../index'
import AvatarDocs from './avatar.mdx'
import components from '../mdx-components'

storiesOf('parts/avatar', module)
  .add('Avatar', () => {
    return (
      <Wrapper title="Avatar">
        <div className="mb-20">
          <Avatar iconSize="rect-icon-lg" />
        </div>
        <div className="mb-20">
          <Avatar iconSize="rect-icon-2xl" empty />
        </div>
      </Wrapper>
    )
  })
  .add('Avatar Docs', () => {
    return (
      <Wrapper>
        <AvatarDocs components={components} />
      </Wrapper>
    )
  })
