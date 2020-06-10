import {
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  ReactChild,
  ReactElement
} from 'react'

export const commonInputClasses =
  'appearance-none text-xs leading-normal rounded-px w-full'
export const commonLabelClasses = 'font-bold block mb-12 leading-tight text-xs'
export const commonControlClasses = 'absolute pin-r mr-12 pos-vertical-center'

export interface FormInputProps {
  className?: string
  disabled?: boolean
  error?: boolean
  errorText?: string
  helpText?: string
  id: string
  tooltip?: ReactChild
  label: string
  name: string
  onBlur?: (
    e?: FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void
  onChange?: (
    e?: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void
  required?: true | '*'
  value?: string
}

export interface TextareaProps extends FormInputProps {
  hideLabel?: boolean
  placeholder?: string
  max?: number
  rows?: number
}

export interface InputProps extends FormInputProps {
  active?: boolean
  disabledAlt?: boolean
  hideLabel?: boolean
  icon?: ReactElement
  isRounded?: boolean
  onFocus?: (e?: FocusEvent<HTMLInputElement>) => void
  onKeyDown?: (e?: KeyboardEvent<HTMLInputElement>) => void
  placeholder?: string
  reset?: () => void
  type?: string
}

export interface SelectInputProps extends FormInputProps {
  active?: boolean
  reset?: () => void
}

export interface CheckableProps extends FormInputProps {
  checked?: boolean
}

export interface ImageInputProps extends FormInputProps {
  text: string
  initialImage?: string
}
