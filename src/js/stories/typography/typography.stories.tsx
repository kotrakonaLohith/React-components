import { storiesOf } from '@storybook/react'
import React from 'react'
import Wrapper from '../_wrapper'
import BodyDocs from './body.mdx'
import ListsDocs from './lists.mdx'
import HeadingsDocs from './headings.mdx'
import components from '../mdx-components'

storiesOf('parts/typography', module)
  .add('Headings', () => {
    return (
      <Wrapper>
        <HeadingsDocs components={components} />
      </Wrapper>
    )
  })
  .add('Lists', () => {
    return (
      <Wrapper>
        <ListsDocs components={components} />
      </Wrapper>
    )
  })
  .add('Body', () => {
    return (
      <Wrapper>
        <BodyDocs components={components} />
      </Wrapper>
    )
  })