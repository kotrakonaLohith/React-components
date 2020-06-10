import React, { FC } from 'react'
import cx from 'classnames'
import CheckIcon from '../../img/icons/ui/check.svg'
import OverflowIcon from '../../img/icons/ui/overflow.svg'

interface StatusMarkerProps {
  className?: string
  verified?: boolean
}

const StatusMarker: FC<StatusMarkerProps> = ({ className, verified }) => {
  return (
    <p
      className={cx(className, 'flex items-center font-bold tracking-loose uppercase text-2xs', {
        'text-dark-blue-400': verified,
        'text-gray-400': !verified
      })}
    >
      {/* {verified ? (<CheckIcon aria-hidden="true" />) : (<CheckIcon aria-hidden="true" />)} */}
      <span
        className={cx(
          'inline-block relative rect-icon border-2 rounded-full mr-10',
          {
            'border-dark-blue-400': verified,
            'border-gray-400': !verified
          }
        )}
      >
        {verified ? (
          <CheckIcon className="absolute pos-center block rect-icon-xxs" aria-hidden="true" />
        ) : (
          <OverflowIcon className="absolute pos-center block rect-icon-xxs" aria-hidden="true" />
        )}
      </span>
      {verified ? 'Verified' : 'Pending Verification'}
    </p>
  )
}

export default StatusMarker