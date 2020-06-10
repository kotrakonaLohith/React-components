import React, { FC, useState, useEffect } from 'react'
import cx from 'classnames'
import {
  commonLabelClasses,
  commonInputClasses,
  TextareaProps
} from './_common'
import { HelpText, ErrorText } from './FormText'
import Label from './_label'

const Textarea: FC<TextareaProps> = ({
  className,
  error,
  errorText,
  helpText,
  hideLabel,
  label,
  max = 0,
  onChange,
  required,
  tooltip,
  ...props
}) => {
  const [charsLeft, setCharsLeft] = useState(0)
  useEffect(
    () => {
      setCharsLeft(max)
    },
    [max]
  )
  const groupClasses = className
  const labelClasses = cx(commonLabelClasses, {
    'text-gray-300': props.disabled,
    'sr-only': hideLabel
  })
  const textareaClasses = cx(
    commonInputClasses,
    'p-8 border resize-none focus:shadow-outline',
    {
      'border-red-600 bg-red-100 text-red-600': error,
      'focus:border-bright-blue-500': !error,
      'bg-gray-100 text-gray-300': props.disabled
    }
  )

  const handleCharCount = (e: any) => {
    setCharsLeft(max - e.target.value.length)

    if (onChange) {
      onChange(e)
    }
  }

  return (
    <div className={groupClasses}>
      <Label
        required={required}
        tooltip={tooltip}
        className={labelClasses}
        htmlFor={props.id}
      >
        {label}
      </Label>
      <textarea
        className={textareaClasses}
        onChange={handleCharCount}
        {...props}
      />
      {!!max && (
        <p className="text-xs text-gray-500 text-right pt-8">
          {charsLeft} Characters left
        </p>
      )}
      <HelpText>{helpText}</HelpText>
      {error && <ErrorText>{errorText}</ErrorText>}
    </div>
  )
}

export default Textarea
