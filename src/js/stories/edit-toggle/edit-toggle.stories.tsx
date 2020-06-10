import { storiesOf } from '@storybook/react'
import React from 'react'
import Wrapper from '../_wrapper'
import { EditToggle, EditToggleContent, EditToggleForm } from '../index'
import EditToggleDocs from './edit-toggle.mdx'
import components from '../mdx-components'

storiesOf('parts/edit-toggle', module)
  .add('Edit Toggle', () => {
    return (
      <Wrapper title="Standard Story">
        <EditToggle notEditable>
          <EditToggleContent>
            Content that cannot be editted here
          </EditToggleContent>
        </EditToggle>
        <EditToggle>
          <EditToggleContent>
            Content that can be editted here
          </EditToggleContent>
          <EditToggleForm>Form to edit content goes here</EditToggleForm>
        </EditToggle>
      </Wrapper>
    )
  })
  .add('Edit Toggle Docs', () => {
    return (
      <Wrapper>
        <EditToggleDocs components={components} />
      </Wrapper>
    )
  })
