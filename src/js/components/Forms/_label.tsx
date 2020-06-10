import React, { FC, ReactChild } from 'react'
import Tooltip from '../Tooltip'

interface Props {
  className?: string
  htmlFor: string
  required?: boolean | '*'
  tooltip?: ReactChild
  tooltipAlt?: boolean
}

const Label: FC<Props> = ({ children, required, tooltip, tooltipAlt, ...props }) => {
  return (
    <label {...props}>
      {children}
      {required && required !== '*' && ' '}
      {required &&
        required !== '*' && (
          <span className="text-red-600 font-semibold">*Required</span>
        )}
      {required === '*' && <span>{required}</span>}
      {tooltip && (
        <Tooltip alt={tooltipAlt} inline className="inline-block ml-8">{tooltip}</Tooltip>
      )}
    </label>
  )
}

export default Label
