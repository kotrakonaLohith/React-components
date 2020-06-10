import { storiesOf } from '@storybook/react'
import React from 'react'
import Wrapper from '../_wrapper'
import components from '../mdx-components'
import ButtonTypes from './button-types.mdx'
import ButtonSizes from './button-sizes.mdx'
import ButtonExtras from './button-extras.mdx'
import { Button } from '..';

storiesOf('parts/buttons', module)
  .add('Button', () => {
    return(
      <Wrapper title="Button">
        <Button primary>Button</Button>
      </Wrapper>
    )
  })
  .add('Button Types', () => {
    return (
      <Wrapper>
        <ButtonTypes components={components} />
      </Wrapper>
    )
  })
  .add('Button Sizes', () => {
    return (
      <Wrapper>
        <ButtonSizes components={components} />
      </Wrapper>
    )
  })
  .add('Button Extras', () => {
    return (
      <Wrapper>
        <ButtonExtras components={components} />
      </Wrapper>
    )
  })