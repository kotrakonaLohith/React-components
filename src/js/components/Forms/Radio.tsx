import React, { FC } from 'react'
import cx from 'classnames'
import { CheckableProps } from './_common'
import { HelpText, ErrorText } from './FormText'

const Radio: FC<CheckableProps> = ({
  className,
  error,
  errorText,
  helpText,
  label,
  required,
  ...props
}) => {
  const groupClasses = cx(className, 'styled-radio', {
    '-error': error
  })

  return (
    <div className={groupClasses}>
      <input className="sr-only" type="radio" {...props} />
      <label htmlFor={props.id}>
        {label}
        {required && required !== '*' && ' '}
        {required &&
          required !== '*' && (
            <span className="text-red-600 font-semibold">*Required</span>
          )}
        {required === '*' && <span>{required}</span>}
        <span className="styled-radio__box">
          <i />
        </span>
      </label>
      <HelpText>{helpText}</HelpText>
      {error && (
        <ErrorText>{errorText}</ErrorText>
      )}
    </div>
  )
}

export default Radio
