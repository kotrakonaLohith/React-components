import { storiesOf } from '@storybook/react'
import React from 'react'
import { Form, FormField, Button } from '../../index'
import Wrapper from '../../_wrapper'

storiesOf('components/Forms', module).add('Login Form', () => {
  return (
    <Wrapper title="Login Form">
      <Form
        onSubmit={(e, values) => {
          e.preventDefault()
          console.log(values) // tslint:disable-line:no-console
        }}
      >
        <h1 className="heading-secondary mb-16">Sign In</h1>
        <p className="mb-40">
          Don't have a My Rotary account?{' '}
          <Button text anchor href="#">
            Create One »
          </Button>
        </p>
        <FormField
          className="mb-24"
          type="email"
          label="Email"
          name="email"
          required="*"
          tooltip={
            <>
              To retrieve your sign-in email,{' '}
              <Button text href="#" anchor>
                please contact us by email or phone.
              </Button>
            </>
          }
        />
        <FormField
          className="mb-24"
          type="password"
          label="Password"
          name="password"
          required="*"
        />
        <div className="flex justify-between mb-32">
          <FormField
            isChecked
            type="checkbox"
            label="Remember me"
            name="remember_me"
            tooltip="Select this option to stay signed into the site for up to 30 days."
          />
          <a
            className="text-xs text-dark-blue-400 hover:text-bright-blue-600 no-underline hover:underline"
            href="#"
          >
            Forgot Password
          </a>
        </div>

        <Button className="full" primary type="submit">
          Sign In
        </Button>
      </Form>
    </Wrapper>
  )
})
