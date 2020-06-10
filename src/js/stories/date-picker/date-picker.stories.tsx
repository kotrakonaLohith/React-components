import { storiesOf } from '@storybook/react'
import React from 'react'
import Wrapper from '../_wrapper'
// import DOCS from './DOCS.mdx'
import { DatePicker } from '../index'

storiesOf('parts/date-picker', module)
  .add('Date Picker', () => {
    return (
      <Wrapper title="Date Picker">
        <DatePicker />
      </Wrapper>
    )
  })
  .add('Date Picker Docs', () => {
    return (
      <Wrapper>
        
      </Wrapper>
    )
  })
