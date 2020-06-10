import { storiesOf } from '@storybook/react'
import React, { useState, FC } from 'react'
import Wrapper from '/js/stories/_wrapper'
import LeftIcon from '/img/icons/arrows/left.svg'
import { Form, FormField, Radio } from '/js/components/Forms'
import CustomSelect from '/js/components/Forms/CustomSelect'
import Button from '/js/components/Button'
import FormContext from '/js/contexts/FormContext'
import { FormState } from '/js/components/Forms/Form'

const WhoCanSeeThisDropdown: FC<{ id: string }> = ({ id }) => {
  const [selected, setSelected] = useState<string | undefined>()

  return (
    <FormContext.Consumer>
      {(context: FormState) => {
        return (
          <CustomSelect
            alt
            background="bg-bright-blue-100"
            id={id}
            label={selected}
            selected={!!selected}
            tooltip="This tooltip appears when a user clicks the information icon. The language will explain what this field does and how it should be used."
            topper="Who Can See This"
            handleClear={() => {
              setSelected(undefined)
              context.onChange(id, '')
            }}
          >
            {[
              { id: 'all', label: 'All Rotary Memeber' },
              {
                id: 'club-district',
                label: 'All Members of My Club and District'
              },
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
                onChange={() => {
                  context.onChange(id, val.id)
                  setSelected(val.label)
                }}
                className={arr.length - 1 !== index ? 'mb-20' : ''}
                id={val.id}
                label={val.label}
                name={id}
              />
            ))}
          </CustomSelect>
        )
      }}
    </FormContext.Consumer>
  )
}

storiesOf('components/pages/MembersProfileEdit', module).add(
  'Edit Personal Details',
  () => {
    return (
      <Wrapper>
        <header className="mb-64">
          <a href="#" className="heading-topper">
            <LeftIcon aria-hidden="true" /> Profile
          </a>
          <h1 className="heading-primary">Edit Personal Details</h1>
          <p>
            Only Latin characters may be entered in the personal details fields
            unless stated otherwise.
          </p>
        </header>
        <Form
          onSubmit={(e, vals, errs) => {
            e.preventDefault()
            console.log('vals', vals) // tslint:disable-line:no-console
            console.log('errs', errs) // tslint:disable-line:no-console
          }}
        >
          <section className="border-b pb-80 mb-64">
            <h2 className="heading-secondary mb-24">Profile Photo</h2>
            <div className="md:flex justify-between">
              <article className="w-full md:w-1/2 lg:w-2/3 md:pr-16 lg:pr-0 mb-24 md:mb-0">
                <div className="md:max-w-form-md">
                  <FormField
                    label="Upload Image"
                    text="Choose an image from your files. For best results, use an image that is at least 500px wide."
                    name="imageInput"
                    type="image"
                  />
                </div>
              </article>
              <aside className="w-full md:w-1/2 lg:w-1/3 md:pl-16 lg:pl-0">
                <WhoCanSeeThisDropdown id="profile_photo_who_can_see_this" />
              </aside>
            </div>
          </section>
          <section className="border-b pb-60 mb-40">
            <h2 className="heading-secondary mb-24">Personal Information</h2>
            <div className="md:flex justify-between">
              <article className="w-full md:w-1/2 lg:w-2/3 md:pr-16 lg:pr-0 mb-24 md:mb-0">
                <div className="md:max-w-form-md">
                  <FormField
                    required="*"
                    className="mb-24"
                    label="Full Name"
                    name="full_name"
                    type="text"
                  />
                  <FormField
                    required="*"
                    className="mb-24"
                    label="Given Name"
                    name="given_name"
                    type="text"
                  />
                  <FormField
                    className="mb-24"
                    label="Middle Name"
                    name="middle_name"
                    type="text"
                  />
                  <FormField
                    required="*"
                    className="mb-24"
                    label="Family Name"
                    name="family_name"
                    type="text"
                  />
                  <FormField
                    className="md:max-w-form-sm"
                    label="Gender"
                    name="gender"
                    type="select"
                  >
                    <option value="">--Select--</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </FormField>
                </div>

                {/* Missing date field for DoB */}
              </article>
              <aside className="w-full md:w-1/2 lg:w-1/3 md:pl-16 lg:pl-0">
                <WhoCanSeeThisDropdown id="personal_information_who_can_see_this" />
              </aside>
            </div>
          </section>
          <div className="flex">
            <Button className="mr-20 min-w-button-md" primary>
              Save Changes
            </Button>
            <Button className="min-w-button-md" secondary>
              Cancel
            </Button>
          </div>
        </Form>
      </Wrapper>
    )
  }
)
