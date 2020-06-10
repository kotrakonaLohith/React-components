import React, { FC } from 'react'
import cx from 'classnames'
import CloseIcon from '../../../img/icons/circles/close.svg'
import DownIcon from '../../../img/icons/arrows/down.svg'
import {
  SelectInputProps,
  commonLabelClasses,
  commonInputClasses,
  commonControlClasses
} from './_common'
import { HelpText, ErrorText } from './FormText'
import Label from './_label'

const SelectInput: FC<SelectInputProps> = ({
  active,
  children,
  className,
  error,
  errorText,
  label,
  required,
  reset,
  tooltip,
  helpText,
  ...props
}) => {
  const inActiveState = active && reset
  const groupClasses = className
  const labelClasses = commonLabelClasses
  const inputClasses = cx(commonInputClasses, 'border focus:shadow-outline px-16 py-8', {
    'bg-white': !props.disabled,
    'border-dark-blue-400': inActiveState,
    'border-red-600 bg-red-100 text-red-600': error,
    'focus:border-bright-blue-500': !error && !inActiveState,
    'bg-gray-100': props.disabled
  })
  const svgClasses = cx({
    [`${commonControlClasses} rect-icon-sm pointer-events-none`]: !inActiveState,
    'text-bright-blue-600': !inActiveState && !props.disabled && !error,
    'text-gray-300': inActiveState || props.disabled,
    'text-red-600': error,
    'rect-icon': inActiveState
  })

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
      <div className={cx('styled-select', { '-disabled': props.disabled })}>
        <select className={inputClasses} {...props}>
          {children}
        </select>

        {inActiveState ? (
          <button
            aria-hidden="true"
            className={commonControlClasses}
            onClick={reset}
            tabIndex={-1}
            type="button"
          >
            <CloseIcon aria-hidden="true" className={svgClasses} />
          </button>
        ) : (
          <DownIcon aria-hidden="true" className={svgClasses} />
        )}
      </div>
      <HelpText>{helpText}</HelpText>
      {error && (
        <ErrorText>{errorText}</ErrorText>
      )}
    </div>
  )
}

export default SelectInput
