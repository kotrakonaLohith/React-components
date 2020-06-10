import { storiesOf } from '@storybook/react'
import React from 'react'
import { DocWrapper } from './utils/doc-parts'
import components from './mdx-components'
import ColorsGuide from './general/colors.mdx'

storiesOf('guides/general', module).add('Colors Guide', () => {
  return (
    <DocWrapper wide title="Colors Guide">
      <ColorsGuide components={components} />
    </DocWrapper>
  )
})
