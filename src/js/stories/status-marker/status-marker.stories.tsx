import { storiesOf } from '@storybook/react'
import React from 'react'
import Wrapper from '../_wrapper'
import { StatusMarker } from '../index'
import StatusMarkerDocs from './status-marker.mdx'
import components from '../mdx-components'

storiesOf('parts/status-marker', module)
  .add('Status Marker', () => {
    return (
      <Wrapper title="Status Marker">
        <StatusMarker verified />
        <StatusMarker />
      </Wrapper>
    )
  })
  .add('Status Marker Docs', () => {
    return (
      <Wrapper>
        <StatusMarkerDocs components={components} />
      </Wrapper>
    )
  })
