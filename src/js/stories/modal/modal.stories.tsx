import { storiesOf } from '@storybook/react'
import React from 'react'
import Wrapper from '../_wrapper'
import { Modal, Button, Form, FormField } from '../index'
import ModalDocs from './modal.mdx'
import components from '../mdx-components'

storiesOf('parts/modal', module)
  .add('Modal', () => {
    return (
      <Wrapper title="Modal">
        <Modal showCloseBtn={true}>
          <Form
            onSubmit={() => {
              return
            }}
          >
            <h1 className="heading -secondary mb-40">
              Example Form Inside a Modal
            </h1>
            <FormField
              className="mb-24"
              type="text"
              label="Input field"
              name="input"
              placeholder="Placeholder text"
              tooltip={<>Exampe tooltip</>}
            />
            <Button className="full" primary type="submit">
              Form Button
            </Button>
          </Form>
        </Modal>
      </Wrapper>
    )
  })
  .add('Modal Docs', () => {
    return (
      <Wrapper>
        <ModalDocs components={components} />
      </Wrapper>
    )
  })
