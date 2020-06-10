import React, { ChangeEvent, Component, FC, ReactChild } from 'react'
import { omit } from 'lodash'
import Checkbox from './Checkbox'
import FormContext from '../../contexts/FormContext'
import Input from './Input'
import Radio from './Radio'
import SelectInput from './Select'
import ImageInput from './ImageInput'
import Textarea from './Textarea'
import { FormState } from './Form'
import {
  InputProps,
  SelectInputProps,
  CheckableProps,
  ImageInputProps,
  TextareaProps
} from './_common'

interface FormFieldState {
  value: string | boolean
  errorState: boolean
  errorTextState?: string
}

interface CommonProps {
  className?: string
  disabled?: boolean
  error?: boolean
  errorText?: string
  helpText?: string
  label: string
  name: string
  placeholder?: string
  required?: true | '*' | undefined
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
  passedContext?: FormState
}

interface Props extends CommonProps {
  id?: string
  max?: never
  text?: string
  tooltip?: ReactChild
  type: 'text' | 'select' | 'date' | 'password' | 'number' | 'email' | 'tel'
}

interface PropsStrict extends CommonProps {
  id: string
  isChecked?: boolean
  max?: never
  text?: never
  type: 'radio'
}

interface CheckedProps extends CommonProps {
  id?: string
  isChecked?: boolean
  max?: never
  text?: never
  tooltip?: ReactChild
  type: 'checkbox'
}

interface ImageProps extends CommonProps {
  id?: string
  initialImage?: string
  max?: never
  text: string
  type: 'image'
}

interface TextareaFormFieldProps extends CommonProps {
  id?: string
  max?: number
  rows?: number
  text?: never
  type: 'textarea'
}

class FormField extends Component<
  Props | PropsStrict | CheckedProps | ImageProps | TextareaFormFieldProps,
  FormFieldState
> {
  state = {
    value: '',
    errorState: !!this.props.error,
    errorTextState: this.props.errorText
  }

  componentDidMount() {
    const { isChecked, type, passedContext, name, label } = this
      .props as CheckedProps

    if (this.props.required) {
      passedContext!.setError(name, label, 'is required')
    }

    if (type === 'checkbox' || type === 'radio') {
      this.setState({
        value: !!isChecked
      })

      // set initial value
      passedContext!.onChange(name, !!isChecked)
    } else {
      // set initial value
      passedContext!.onChange(name, '')
    }
  }

  render() {
    const { value, errorState, errorTextState } = this.state
    const {
      children,
      id,
      passedContext,
      type,
      onChange,
      ...restProps
    } = this.props

    const props: InputProps &
      SelectInputProps &
      CheckableProps &
      ImageInputProps &
      TextareaProps = {
      ...restProps,
      onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const target = e && e.currentTarget
        if (onChange) {
          onChange(e)
        }

        this.handleChange(this.props.name, passedContext!, target)
      },
      onBlur: this.validate,
      id: id || this.props.name,
      error: errorState,
      errorText: errorTextState,
      text: this.props.text || ''
    }

    if (['text', 'password', 'email', 'tel', 'select'].indexOf(type) >= 0) {
      props.value = value
      props.active = value !== ''
      props.reset = () => {
        this.handleChange(this.props.name, passedContext!)
      }
    }

    if (['radio', 'checkbox'].indexOf(this.props.type) === -1) {
      props.value = value
    }

    if (type === 'checkbox') {
      const checkboxProps = omit(props, ['isChecked']) as CheckableProps
      return (
        <Checkbox checked={!!value} {...checkboxProps}>
          {children}
        </Checkbox>
      )
    } else if (type === 'radio') {
      return <Radio {...props} />
    } else if (type === 'select') {
      return <SelectInput {...props}>{children}</SelectInput>
    } else if (type === 'image') {
      return <ImageInput {...props} />
    } else if (type === 'textarea') {
      return <Textarea {...props} />
    } else {
      return <Input type={type} {...props} />
    }
  }

  handleChange(
    name: string,
    context: FormState,
    target?: HTMLInputElement | HTMLSelectElement
  ) {
    let value

    // @TODO handle files
    if (!target) {
      value = ''
    } else if (target.type === 'checkbox') {
      value = (target as HTMLInputElement).checked
    } else {
      value = target.value
    }

    context.onChange(name, value)

    this.setState({ value }, () => {
      if (this.props.required) {
        this.validate()
      }
    })
  }

  validate = () => {
    const { required, type, name, label } = this.props

    if (!required || type === 'radio') {
      return
    }

    const { value } = this.state
    const msg = 'is required'

    if (!value) {
      this.props.passedContext!.setError(name, label, msg)
    } else {
      this.props.passedContext!.removeError(name)
    }

    this.setState({
      errorState: !value,
      errorTextState: `${label} ${msg}`
    })
  }
}

// This is used to forward the context to lifecycle methods on FormField
const FormFieldWrapper: FC<
  Props | PropsStrict | CheckedProps | ImageProps | TextareaFormFieldProps
> = props => {
  return (
    <FormContext.Consumer>
      {(context: FormState) => {
        return <FormField {...props} passedContext={context} />
      }}
    </FormContext.Consumer>
  )
}

export default FormFieldWrapper
