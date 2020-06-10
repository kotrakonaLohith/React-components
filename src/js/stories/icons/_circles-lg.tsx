import React from 'react'
import Wrapper from '../_wrapper'

// Circle Icons lg
import AddPressedIcon from '../../../img/icons/circles-lg/add-pressed.svg'
import AddIcon from '../../../img/icons/circles-lg/add.svg'

export default () => {
  const classes = 'rect-icon-lg m-8'
  return (
    <Wrapper title="Circles Icons">
      <div className="group inline-block">
        <div className="icon-add rect-icon-2xl"><span>Add</span></div>
      </div>
      <AddPressedIcon aria-hidden="true" className={classes} />
      <AddIcon aria-hidden="true" className={classes} />
    </Wrapper>
  )
}
