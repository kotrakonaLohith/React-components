import React, { FC } from 'react'
import cx from 'classnames'
import CloseIcon from '../../img/icons/ui/close.svg'

export interface NotificationProps {
  className?: string
  error?: boolean
  onClose?: () => void
  success?: boolean
}

const Notification: FC<NotificationProps> = ({
  children,
  className,
  error,
  onClose,
  success,
  ...props
}) => {
  const classes = cx(className, 'notification', {
    '-success': success,
    '-error': error,
    '-neutral': !error && !success,
    '-dismiss': onClose
  })

  return (
    <div className={classes} {...props}>
      {children}

      {onClose && (
        <button onClick={onClose}>
          <CloseIcon aria-hidden="true" />
        </button>
      )}
    </div>
  )
}

export default Notification
