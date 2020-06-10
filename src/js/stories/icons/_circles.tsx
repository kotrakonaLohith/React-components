import React from 'react'
import cx from 'classnames'
import Wrapper from '../_wrapper'

// Circle Icons
import CloseIcon from '../../../img/icons/circles/close.svg'
import InformationIcon from '../../../img/icons/circles/information.svg'
import UserIcon from '../../../img/icons/circles/user.svg'

export default () => {
  const classes = 'rect-icon m-8'

  return (
    <Wrapper title="Circles Icons">
      <CloseIcon aria-hidden="true" className={classes} />
      <InformationIcon
        aria-hidden="true"
        className={cx(
          classes,
          'border-2 border-gray-400 text-gray-400 rounded-full'
        )}
      />
      <UserIcon aria-hidden="true" className={cx(classes, 'fill-white')} />
    </Wrapper>
  )
}
