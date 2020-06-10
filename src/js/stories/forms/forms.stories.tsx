import { storiesOf } from '@storybook/react'
import React from 'react'
import FormFull from './_form-full'
import Wrapper from '../_wrapper'
import components from '../mdx-components'
import InputDocs from './input.mdx'
import SelectInputDocs from './select-input.mdx'
import CheckboxDocs from './checkbox.mdx'
import RadioDocs from './radio.mdx'
import FileInputDocs from './file.mdx'
import FormDocs from './form.mdx'

storiesOf('parts/forms', module)
  .add('Forms', () => {
    return (
      <Wrapper>
        <FormFull />
      </Wrapper>
    )
  })
  .add('Input Docs', () => {
    return (
      <Wrapper>
        <InputDocs components={components} />
      </Wrapper>
    )
  })
  .add('Select Docs', () => {
    return (
      <Wrapper>
        <SelectInputDocs components={components} />
      </Wrapper>
    )
  })
  .add('Checkbox Docs', () => {
    return (
      <Wrapper>
        <CheckboxDocs components={components} />
      </Wrapper>
    )
  })
  .add('Radio Docs', () => {
    return (
      <Wrapper>
        <RadioDocs components={components} />
      </Wrapper>
    )
  })
  .add('File Input Docs', () => {
    return (
      <Wrapper>
        <FileInputDocs components={components} />
      </Wrapper>
    )
  })
  .add('Form and FormField Docs', () => {
    return (
      <Wrapper>
        <FormDocs components={components} />
      </Wrapper>
    )
  })
