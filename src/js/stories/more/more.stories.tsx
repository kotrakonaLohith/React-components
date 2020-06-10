import { storiesOf } from '@storybook/react'
import React from 'react'
import Wrapper from '../_wrapper'
import { More } from '../index'
import MoreDocs from './more.mdx'
import components from '../mdx-components'

storiesOf('parts/more', module)
.add(
  'More',
  () => {
    return (
      <Wrapper title="More">
        <More className="mb-20">
          <div className="p-20 border mb-20">
            <p>Content inside More!</p>
          </div>
        </More>
        <More label="Different Label" className="mb-20">
          <div className="p-20 border mb-20">
            <p>Label can be changed for the button!</p>
          </div>
        </More>
      </Wrapper>
    )
  }
)
.add(
  'More Docs',
  () => {
    return (
      <Wrapper>
        <MoreDocs components={components} />
      </Wrapper>
    )
  }
)
