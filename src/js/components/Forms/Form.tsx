import React, { Component, FormEvent } from 'react'
import FormContext from '../../contexts/FormContext'

interface FormError {
  name: string
  label: string
  msg: string
}

interface FormValues {
  name: string
  value: string | boolean
}

export interface FormState {
  values: FormValues[]
  errors: FormError[]
  onChange: (name: string, value: string | boolean) => void
  setError: (name: string, label: string, msg: string) => void
  removeError: (name: string) => void
}

interface FormProps {
  className?: string
  onSubmit: (
    e: FormEvent<HTMLElement>,
    values: object,
    errors: FormError[]
  ) => void
}

class Form extends Component<FormProps, FormState> {
  state = {
    values: [], // @TODO settle on a format for these values
    errors: [],
    onChange: (name: string, value: string) => {
      this.setState((prevState: FormState) => {
        const newVals = prevState.values
          .filter(val => {
            return val.name !== name
          })
          .concat([{ name, value }])

        return {
          values: newVals
        }
      })
    },
    setError: (name: string, label: string, msg: string) => {
      this.setState((prevState: FormState) => {
        return {
          errors: prevState.errors
            .filter(error => {
              return error.name !== name
            })
            .concat([{ name, label, msg }])
        }
      })
    },
    removeError: (name: string) => {
      this.setState((prevState: FormState) => {
        return {
          errors: prevState.errors.filter(error => {
            return error.name !== name
          })
        }
      })
    }
  }

  render() {
    const { children, onSubmit, className } = this.props

    return (
      <FormContext.Provider value={this.state}>
        <form
          className={className}
          onSubmit={e => onSubmit(e, this.state.values, this.state.errors)}
        >
          {children}
        </form>
      </FormContext.Provider>
    )
  }
}

export default Form
