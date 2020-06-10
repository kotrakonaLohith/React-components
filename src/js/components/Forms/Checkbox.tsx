import React, { Fragment, FC } from 'react'
import cx from 'classnames'
import CheckIcon from '../../../img/icons/ui/check.svg'
import { CheckableProps } from './_common'
import { HelpText, ErrorText } from './FormText'
import Tooltip from '../Tooltip'

const Checkbox: FC<CheckableProps> = ({
  children,
  className,
  error,
  errorText,
  helpText,
  label,
  required,
  tooltip,
  ...props
}) => {
  const groupClasses = cx(className, 'styled-checkbox', {
    '-error': error
  })

  return (
    <div className={groupClasses}>
      <input className="sr-only" type="checkbox" {...props} />
      <label htmlFor={props.id}>
        {!children ? (
          <Fragment>
            {label}
            {required && required !== '*' && ' '}
            {required &&
              required !== '*' && (
                <span className="text-red-600 font-semibold">*Required</span>
              )}
            {required === '*' && <span>{required}</span>}
            {tooltip && (
              <Tooltip inline className="inline-block ml-8">
                {tooltip}
              </Tooltip>
            )}
          </Fragment>
        ) : (
          <Fragment>
            <h6 className="text-xs mb-8">
              {label}
              {required && required !== '*' && ' '}
              {required &&
                required !== '*' && (
                  <span className="text-red-600 font-semibold">*Required</span>
                )}
              {required === '*' && <span>{required}</span>}
              {tooltip && (
                <Tooltip inline className="inline-block ml-8">
                  {tooltip}
                </Tooltip>
              )}
            </h6>
            <p className="text-xs font-normal">{children}</p>
          </Fragment>
        )}
        <span className="styled-checkbox__box">
          <CheckIcon aria-hidden="true" />
        </span>
      </label>
      <HelpText>{helpText}</HelpText>
      {error && <ErrorText>{errorText}</ErrorText>}
    </div>
  )
}

export default Checkbox
