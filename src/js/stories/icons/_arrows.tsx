import React from 'react'
import Wrapper from '../_wrapper'

// Arrow Icons
import DownIcon from '../../../img/icons/arrows/down.svg'
import LeftIcon from '../../../img/icons/arrows/left.svg'
import RightIcon from '../../../img/icons/arrows/right.svg'
import SortIcon from '../../../img/icons/arrows/sort.svg'
import UpIcon from '../../../img/icons/arrows/up.svg'

export default () => {
  const classes = 'rect-icon m-8'
  return (
    <Wrapper title="Arrows Icons">
      <DownIcon aria-hidden="true" className={classes} />
      <LeftIcon aria-hidden="true" className={classes} />
      <RightIcon aria-hidden="true" className={classes} />
      <SortIcon aria-hidden="true" className={classes} />
      <UpIcon aria-hidden="true" className={classes} />
    </Wrapper>
  )
}
