import React, { FC } from 'react'
import cx from 'classnames'
import EditIcon from '../../img/icons/ui/edit.svg'

const EditLink: FC<{
  disabled?: boolean
  href: string
  className?: string
}> = ({ className, href, disabled }) => {
  return (
    <a
      href={href}
      className={cx(
        className,
        'flex items-center text-2xs tracking-loose uppercase font-bold no-underline',
        {
          'text-bright-blue-600 hover:text-dark-blue-400 focus:text-dark-blue-400': !disabled,
          'text-gray-300 cursor-not-allowed': disabled
        }
      )}
    >
      {disabled ? (
        'Not Editable'
      ) : (
        <>
          <EditIcon className="rect-icon-xxs mr-12" /> Edit
        </>
      )}
    </a>
  )
}

export default EditLink