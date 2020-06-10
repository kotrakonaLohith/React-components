import React, { FC } from 'react'
import cx from 'classnames'
import LogoSimple from '../../img/icons/logos/logo-simple.svg'

const Avatar: FC<{
  iconSize: string
  empty?: boolean
  large?: boolean
  medium?: boolean
  photo?: string
}> = ({ empty, iconSize, large, medium, photo }) => {
  return (
    <div
      className={cx(
        'inline-block rounded-full flex-no-shrink overflow-hidden',
        {
          'border-2 border-gray-200': !empty,
          [`icon-add ${iconSize}`]: empty,
          'p-6': !empty && !large && !medium && !photo,
          'p-8 md:p-24': large && !photo,
          'p-16': medium && !photo,
          'rect-profile md:rect-profile-lg': !!photo && !medium,
          'rect-profile': !!photo && medium
        }
      )}
    >
      {empty ? (
        <span>Add</span>
      ) : photo ? (
        <span
          className="w-full h-full block bg-cover"
          style={{ backgroundImage: `url(${photo})` }}
        />
      ) : (
        <LogoSimple aria-hidden="true" className={cx(iconSize, 'block')} />
      )}
    </div>
  )
}

export default Avatar
