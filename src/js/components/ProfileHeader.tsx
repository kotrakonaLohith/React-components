import React, { FC } from 'react'
import cx from 'classnames'
import Avatar from './Avatar'

interface ProfileHeaderProps {
  className?: string
  locations: string
  name: string
  photo?: string
  role: string
}

const ProfileHeader: FC<ProfileHeaderProps> = ({
  className,
  locations,
  name,
  photo,
  role
}) => {
  return (
    <div className={cx(className, 'flex flex-col md:flex-row items-center')}>
      <Avatar iconSize="rect-icon-3xl sm:rect-icon-4xl" large photo={photo} />
      <div className="w-full mt-24 md:w-auto md:mt-0 md:ml-32">
        <h1 className="heading-secondary mb-8 sm:heading-primary">{name}</h1>
        <p>
          <strong className="heading-alt text-sm">{role}</strong>, {locations}
        </p>
      </div>
    </div>
  )
}

export default ProfileHeader
