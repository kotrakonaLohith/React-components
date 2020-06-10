import { storiesOf } from '@storybook/react'
import React from 'react'
import Wrapper from '../_wrapper'
import { Divider } from '../index'
import DividerDocs from './dividers.mdx'
import components from '../mdx-components'

storiesOf('parts/dividers', module)
  .add(
    'Divider',
    () => {
      return (
        <Wrapper title="Dividers">
          <Divider />
        </Wrapper>
      )
    }
  )
  .add(
    'Divider Docs',
    () => {
      return (
        <Wrapper>
          <DividerDocs components={components} />
        </Wrapper>
      )
    }
  )
