import React from 'react'
import cx from 'classnames'
import Wrapper from '../_wrapper'

// Squares
import CollapseIcon from '../../../img/icons/squares/collapse.svg'
import ExpandIcon from '../../../img/icons/squares/expand.svg'

export default () => {
  const classes = 'rect-icon m-8'

  return (
    <Wrapper title="Square Icons">
      <CollapseIcon
        aria-hidden="true"
        className={cx(classes, 'text-white fill-neutral')}
      />
      <ExpandIcon
        aria-hidden="true"
        className={cx(classes, 'text-white fill-neutral')}
      />

      <CollapseIcon
        aria-hidden="true"
        className={cx(classes, 'text-white fill-purple')}
      />
      <ExpandIcon
        aria-hidden="true"
        className={cx(classes, 'text-white fill-purple')}
      />

      <div className="bg-gray-600 p-6 inline-block">
        <CollapseIcon
          aria-hidden="true"
          className={cx(classes, 'text-gray-600 fill-white')}
        />
        <ExpandIcon
          aria-hidden="true"
          className={cx(classes, 'text-gray-600 fill-white')}
        />
      </div>

      <CollapseIcon
        aria-hidden="true"
        className={cx(classes, 'text-white fill-icon')}
      />
      <ExpandIcon
        aria-hidden="true"
        className={cx(classes, 'text-white fill-icon')}
      />
    </Wrapper>
  )
}
