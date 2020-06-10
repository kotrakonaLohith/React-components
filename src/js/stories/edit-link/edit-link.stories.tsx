import { storiesOf } from '@storybook/react'
import React from 'react'
import Wrapper from '../_wrapper'
import { EditLink } from '../index'
import EditLinkDocs from './edit-link.mdx'
import components from '../mdx-components'

storiesOf('parts/edit-link', module)
  .add('Edit Link', () => {
    return (
      <Wrapper title="Edit Link">
        <div className="relative">
          <EditLink className="absolute pin-t pin-r mt-4" href="#" />
          <EditLink className="absolute pin-t pin-l mt-4" disabled href="#" />
        </div>
      </Wrapper>
    )
  })
  .add('Edit Link Docs', () => {
    return (
      <Wrapper>
        <EditLinkDocs components={components} />
      </Wrapper>
    )
  })
