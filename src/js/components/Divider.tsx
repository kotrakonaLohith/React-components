import React, { FC } from 'react'
import cx from 'classnames'

interface DividerProps {
  className?: string
  dotted?: boolean
  light?: boolean
  thick?: boolean
}

const Divider: FC<DividerProps> = ({
  light,
  thick,
  dotted,
  className,
}) => {
  const classes = cx(className, 'divider', {
    '-light': light,
    '-thick': thick,
    '-dotted': dotted
  })

  return <hr className={classes} />
}

export default Divider
