import { storiesOf } from '@storybook/react'
import React from 'react'
import { DocWrapper } from './utils/doc-parts'
import NavigationGuide from './components/navigation.mdx'
import HeaderGuide from './components/header.mdx'
import PageNavGuide from './components/page-nav.mdx'
import components from './mdx-components'

storiesOf('guides/components', module)
  .add('Navigation Guide', () => {
    return (
      <DocWrapper title="Navigation Guide">
        <NavigationGuide components={components} />
      </DocWrapper>
    )
  })
  .add('Header Guide', () => {
    return (
      <DocWrapper wide title="Header Guide">
        <HeaderGuide components={components} />
      </DocWrapper>
    )
  })
  .add('Page Nav Guide', () => {
    return (
      <DocWrapper title="Page Nav Guide">
        <PageNavGuide components={components} />
      </DocWrapper>
    )
  })
