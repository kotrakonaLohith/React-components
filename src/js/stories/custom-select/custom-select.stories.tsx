import { storiesOf } from '@storybook/react'
import React, { FC, useState } from 'react'
import Wrapper from '../_wrapper'
import CustomSelectDocs from './custom-select.mdx'
import components from '../mdx-components'
import { CustomSelect } from '../index'
import { Checkbox } from '../index'
import { Radio } from '../index'

const SampleUse: FC = () => {
  const [selected, setSelected] = useState<string | undefined>()

  function manageSelected(str: string) {
    let selectedArr = selected ? selected.split(' ') : []

    if (selectedArr.indexOf(str) > -1) {
      selectedArr = selectedArr.filter(item => {
        return item !== str
      })
    } else {
      selectedArr = selectedArr.concat(str)
    }

    setSelected(selectedArr.length > 0 ? selectedArr.join(' ') : undefined)
  }

  return (
    <CustomSelect
      selected={!!selected}
      className="flex-no-shrink w-1/4"
      label={selected}
      handleClear={() => {
        setSelected(undefined)
      }}
    >
      {[
        { id: 'active', label: 'Active' },
        { id: 'honorary', label: 'Honorary' },
        { id: 'terminated', label: 'Terminated' }
      ].map((val, index, arr) => (
        <Checkbox
          key={val.id}
          checked={
            !selected ? false : selected.split(' ').indexOf(val.label) > -1
          }
          onChange={() => manageSelected(val.label)}
          className={arr.length - 1 !== index ? 'mb-20' : ''}
          id={val.id}
          label={val.label}
          name={val.id}
        />
      ))}
    </CustomSelect>
  )
}

const SampleAltUse: FC = () => {
  const [selected, setSelected] = useState<string | undefined>()

  return (
    <CustomSelect
      alt
      background="bg-bright-blue-100"
      selected={!!selected}
      label={selected}
      handleClear={() => {
        setSelected(undefined)
      }}
      topper="Sample Custom Select Alt"
      id="sample_custom_select"
      tooltip="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id officiis illum facere. Libero dolores dolore, et dolor cum, iusto tempora sit vel, nulla odio ipsa. Laboriosam optio blanditiis ex debitis."
    >
      {[
        { id: 'all', label: 'All Rotary Memeber' },
        { id: 'club-district', label: 'All Members of My Club and District' },
        {
          id: 'officers-club-district',
          label: 'Only Officers of My Club and District'
        },
        {
          id: 'members-club-officers-district',
          label: 'Only Members of My Club and Officers of My District'
        }
      ].map((val, index, arr) => (
        <Radio
          key={val.id}
          checked={selected === val.label}
          onChange={() => setSelected(val.label)}
          className={arr.length - 1 !== index ? 'mb-20' : ''}
          id={val.id}
          label={val.label}
          name="custom-select"
        />
      ))}
    </CustomSelect>
  )
}

storiesOf('parts/forms/custom-select', module)
  .add('Custom Select', () => {
    return (
      <Wrapper title="Custom Select">
        <div className="flex justify-between">
          <CustomSelect className="w-1/4">
            <button>Required Focusable Element</button>
          </CustomSelect>
          <CustomSelect className="mx-20 w-1/4" label="Second">
            <button>Required Focusable Element</button>
          </CustomSelect>
          <CustomSelect full className="mr-20 w-1/4" label="Third">
            <button>Required Focusable Element</button>
          </CustomSelect>
          <SampleUse />
        </div>
      </Wrapper>
    )
  })
  .add('Alt Custom Select', () => {
    return (
      <Wrapper title="Alt Custom Select">
        <SampleAltUse />
      </Wrapper>
    )
  })
  .add('Custom Select Docs', () => {
    return (
      <Wrapper>
        <CustomSelectDocs components={components} />
      </Wrapper>
    )
  })
