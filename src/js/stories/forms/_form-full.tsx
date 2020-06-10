// tslint:disable:no-console
import React from 'react'
import {
  Form,
  FormField,
  Button,
  HelpText,
  ErrorText,
  Input,
  SelectInput,
  Checkbox,
  Radio,
  ImageInput,
  Textarea
} from '../index'
import options from './_options'
import sampleImage from '../../../img/samples/avatar-image.png'

export default () => (
  <section>
    <h1 className="heading-secondary">Full Example</h1>
    <p className="mb-40">
      Edit this file to test out form components with full{' '}
      <strong>typescript</strong> support on your editor.
    </p>

    <Textarea
      max={500}
      className="mb-20"
      id="input"
      label="Textarea"
      name="textarea"
      placeholder="placeholder text"
    />

    <h2 className="heading-secondary mb-32">Form with FormFields</h2>
    <Form
      className="mb-32"
      onSubmit={(e, values, errors) => {
        e.preventDefault()
        console.log(values, errors)
      }}
    >
      <FormField
        max={500}
        className="mb-20"
        label="Textarea FormField"
        name="textarea_formfield"
        type="textarea"
      />
      <FormField
        className="mb-20"
        label="Upload Image"
        text="Choose an image from your files. For best results, use an image that is at least 500px wide."
        name="image_upload"
        initialImage={sampleImage}
        type="image"
      />

      <FormField
        className="mb-20"
        label="Upload Image"
        text="Choose an image from your files. For best results, use an image that is at least 500px wide."
        name="image_upload_2"
        type="image"
      />

      <FormField
        className="mb-20"
        label="Text Field"
        name="text_field"
        placeholder="Placeholder Text"
        type="text"
      />

      <FormField
        className="mb-20"
        label="Required Text Field"
        name="required_text_field"
        placeholder="Placeholder Text"
        type="text"
        required
      />

      <FormField
        className="mb-20"
        label="Text Field"
        name="text_field_help"
        placeholder="Placeholder Text"
        type="text"
        helpText="This FormField has helper text"
      />

      <FormField
        className="mb-20"
        label="Select Field"
        name="select_field"
        type="select"
        helpText="This FormField has helper text"
      >
        {options()}
      </FormField>

      <FormField
        className="mb-20"
        label="Required Select Field"
        name="required_select_field"
        type="select"
        required
      >
        {options()}
      </FormField>

      <FormField
        className="mb-20"
        label="Checkbox Field"
        name="checkbox_field"
        type="checkbox"
      />

      <FormField
        className="mb-20"
        label="Required Checkbox Field"
        name="required_checkbox_field"
        type="checkbox"
        required
      />

      <FormField
        className="mb-20"
        label="Checkbox Field"
        name="checkbox_field_2"
        type="checkbox"
        isChecked
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quis
        obcaecati sed officiis expedita corporis voluptas pariatur molestias.
        Eaque, quibusdam dolorum earum non! Consequatur cumque, nihil voluptas
        commodi iusto, explicabo!
      </FormField>

      <div className="px-20 py-12 bg-gray-100 mb-20">
        <h2 className="heading-alt text-xs mb-20">Radio Buttons</h2>
        <FormField
          className="mb-20"
          id="radio_sample_1"
          label="Radio Field"
          name="radio_field"
          type="radio"
          value="value 1"
        />
        <FormField
          className="mb-20"
          helpText="This FormField has help text"
          id="radio_sample_3"
          label="Radio Field"
          name="radio_field"
          type="radio"
          value="value 3"
        />
        <FormField
          className="mb-20"
          id="radio_sample_2"
          label="Radio Field 2"
          name="radio_field"
          type="radio"
          value="value 2"
        />
        <HelpText>
          <strong>Help Text</strong> for a group of radio buttons
        </HelpText>
        <ErrorText>
          <strong>Error Text</strong> for a group of radion buttons
        </ErrorText>
      </div>

      <Button primary type="submit">
        Submit
      </Button>
    </Form>

    <h2 className="heading-secondary mb-32">Input</h2>
    <Input
      className="mb-20"
      id="input"
      label="Input"
      name="input"
      placeholder="placeholder text"
    />

    <h2 className="heading-secondary mb-32">Select</h2>
    <SelectInput
      className="mb-20"
      id="select"
      label="Select Input"
      name="select"
    >
      {options()}
    </SelectInput>

    <h2 className="heading-secondary mb-32">Checkbox</h2>
    <Checkbox
      className="mb-20"
      id="checkbox"
      label="Checkbox"
      name="checkbox"
    />

    <h2 className="heading-secondary mb-32">Radio</h2>
    <Radio className="mb-20" id="radio" label="Radio" name="radio_group" />

    <h2 className="heading-secondary mb-32">Image Upload Field</h2>
    <ImageInput
      className="mb-20"
      id="imageInputSolo"
      name="imageInputSolo"
      label="Upload Image"
      text="Choose an image from your files. For best results, use an image that is at least 500px wide."
    />
  </section>
)
