import React, { FC } from 'react'
import cx from 'classnames'
import CloseIcon from '../../../img/icons/circles/close.svg'
import {
  InputProps,
  commonLabelClasses,
  commonInputClasses,
  commonControlClasses
} from './_common'
import { HelpText, ErrorText } from './FormText'
import Label from './_label'

const Input: FC<InputProps> = ({
  active,
  className,
  disabledAlt,
  error,
  errorText,
  helpText,
  hideLabel,
  icon,
  isRounded,
  label,
  required,
  reset,
  tooltip,
  type = 'text',
  ...props
}) => {
  const inActiveState = active && reset
  const groupClasses = className
  const labelClasses = cx(commonLabelClasses, {
    'text-gray-300': props.disabled && !disabledAlt,
    'sr-only': hideLabel,
    'text-gray-400': disabledAlt
  })
  const inputClasses = cx(commonInputClasses, 'focus:shadow-outline', {
    'pl-36': !!icon,
    'rounded-sm': isRounded,
    'border-dark-blue-400 pr-36': inActiveState,
    'border-red-600 bg-red-100 text-red-600': error,
    'focus:border-bright-blue-500': !error && !inActiveState,
    'bg-gray-100 text-gray-300': props.disabled && !disabledAlt,
    'px-16 py-8 border': !disabledAlt,
    'text-gray-400 border-0 px-0 py-0': disabledAlt
  })
  const svgClasses = 'text-gray-300 rect-icon'

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
      <div className="relative">
        {icon &&
          React.cloneElement(icon, {
            'aria-hidden': true,
            className:
              'text-bright-blue-600 rect-icon-sm pos-vertical-center absolute ml-12'
          })}
        <input className={inputClasses} type={type} {...props} />
        {inActiveState ? (
          <button
            aria-hidden="true"
            className={commonControlClasses}
            onClick={reset}
            tabIndex={-1}
            type="button"
          >
            <span className="sr-only">Clear</span>
            <CloseIcon aria-hidden="true" className={svgClasses} />
          </button>
        ) : (
          ''
        )}
      </div>
      <HelpText>{helpText}</HelpText>
      {error && <ErrorText>{errorText}</ErrorText>}
    </div>
  )
}

export default Input
