import { storiesOf } from '@storybook/react'
import React from 'react'
import Wrapper from '../_wrapper'
// import DOCS from './DOCS.mdx'
// import components from '../mdx-components'

storiesOf('parts/_template', module)
  .add('Story Name', () => {
    return (
      <Wrapper title="Standard Story">
        <p>Component Code Here</p>
      </Wrapper>
    )
  })
  .add('MDX Story Name', () => {
    return (
      <Wrapper>
        {/* <DOCS components={components} /> */}
      </Wrapper>
    )
  })
