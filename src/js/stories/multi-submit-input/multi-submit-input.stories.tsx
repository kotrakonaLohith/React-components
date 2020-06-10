import { storiesOf } from '@storybook/react'
import React from 'react'
import Wrapper from '../_wrapper'
import MultiSubmitInputDocs from './multi-submit-input.mdx'
import { MultiSubmitInput, MultiSubmitInputOption } from '../index'
import components from '../mdx-components'
import PagesIcon from '../../../img/icons/ui/pages.svg'
import PeopleIcon from '../../../img/icons/ui/people.svg'
import MapPinIcon from '../../../img/icons/ui/map-pin.svg'

storiesOf('parts/forms/multi-submit-input', module)
  .add('Multi Submit Input', () => {
    return (
      <Wrapper title="Multi Submit Input">
        <div className="w-1/2 mb-32">
          <MultiSubmitInput
            label="Label"
            id="id"
            name="name"
            placeholder="placeholder"
          >
            <MultiSubmitInputOption urlParam="" icon={<PagesIcon />}>
              Search the site
            </MultiSubmitInputOption>
            <MultiSubmitInputOption urlParam="members" icon={<PeopleIcon />}>
              Find a member
            </MultiSubmitInputOption>
            <MultiSubmitInputOption urlParam="clubs" icon={<MapPinIcon />}>
              Find a club
            </MultiSubmitInputOption>
          </MultiSubmitInput>
        </div>
      </Wrapper>
    )
  })
  .add('Multi Submit Input Docs', () => {
    return (
      <Wrapper>
        <MultiSubmitInputDocs components={components} />
      </Wrapper>
    )
  })
