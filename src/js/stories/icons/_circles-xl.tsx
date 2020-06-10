import React from 'react'
import Wrapper from '../_wrapper'

// Circle Icons xl
import SuccessfulIcon from '../../../img/icons/circles-xl/successful.svg'
import UnsuccessfulIcon from '../../../img/icons/circles-xl/unsuccessful.svg'

export default () => {
  const classes = 'rect-icon-xl m-8'

  return (
    <Wrapper title="Circles Icons">
      <SuccessfulIcon aria-hidden="true" className={classes} />
      <UnsuccessfulIcon aria-hidden="true" className={classes} />
    </Wrapper>
  )
}
