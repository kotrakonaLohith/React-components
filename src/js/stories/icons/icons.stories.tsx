import React from 'react'
import { storiesOf } from '@storybook/react'
import ui from './_ui'
import arrows from './_arrows'
import circles from './_circles'
import circlesLg from './_circles-lg'
import circlesXl from './_circles-xl'
import squares from './_squares'
import logos from './_logos'
import IconsDocs from './icons.mdx'
import components from '../mdx-components'
import Wrapper from '../_wrapper'

storiesOf('parts/icons', module)
  .add('UI', ui)
  .add('Arrows', arrows)
  .add('Circles', circles)
  .add('Circles lg', circlesLg)
  .add('Circles xl', circlesXl)
  .add('Squares', squares)
  .add('Logos', logos)
  .add('Icons Docs', () => {
    return (
      <Wrapper>
        <IconsDocs components={components} />
      </Wrapper>
    )
  })
