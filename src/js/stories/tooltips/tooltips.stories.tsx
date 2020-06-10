import { storiesOf } from '@storybook/react'
import React from 'react'
import Wrapper from '../_wrapper'
import { Button, Tooltip } from '../index'
import TooltipDocs from './tooltips.mdx'
import components from '../mdx-components'

storiesOf('parts/tooltips', module)
  .add('Info', () => {
    return (
      <Wrapper title="Info Tooltip">
        <Tooltip className="mb-20">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam quasi totam atque tenetur facere minus et iure voluptatum voluptas qui, nam pariatur maiores nobis tempore eius vero repellendus. Commodi, quibusdam!</p>
        </Tooltip>

        <Tooltip className="mb-20">
          To retrieve your sign-in email,{' '}
          <Button text href="#" anchor>
            please contact us by email or phone.
          </Button>
        </Tooltip>

        <Tooltip alt>
          To retrieve your sign-in email,{' '}
          <Button text textLight href="#" anchor>
            please contact us by email or phone.
          </Button>
        </Tooltip>
      </Wrapper>
    )
  })
  .add('Tooltip Docs', () => {
    return (
      <Wrapper>
        <TooltipDocs components={components} />
      </Wrapper>
    )
  })
