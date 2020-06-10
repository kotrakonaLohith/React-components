import { storiesOf } from '@storybook/react'
import React from 'react'
import { DocWrapper } from './utils/doc-parts'
import ButtonsGuide from './parts/buttons-guide.mdx'
import NotificationGuide from './parts/notifications-guide.mdx'
import ListsGuide from './parts/lists-guide.mdx'
import PaginationGuide from './parts/pagination-guide.mdx'
import FormFieldsGuide from './parts/form-fields-guide.mdx'
import components from './mdx-components'

storiesOf('guides/parts', module)
  .add('Buttons Guide', () => {
    return (
      <DocWrapper title="Buttons Guide">
        <ButtonsGuide components={components} />
      </DocWrapper>
    )
  })
  .add('Notifications Guide', () => {
    return (
      <DocWrapper title="Notifications Guide">
        <NotificationGuide components={components} />
      </DocWrapper>
    )
  })
  .add('Lists Guide', () => {
    return (
      <DocWrapper title="Lists Guide">
        <ListsGuide components={components} />
      </DocWrapper>
    )
  })
  .add('Pagination Guide', () => {
    return (
      <DocWrapper title="Pagination Guide">
        <PaginationGuide components={components} />
      </DocWrapper>
    )
  })
  .add('Form Fields Guide', () => {
    return (
      <DocWrapper title="Form Fields Guide">
        <FormFieldsGuide components={components} />
      </DocWrapper>
    )
  })
