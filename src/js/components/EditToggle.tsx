import React, { FC, useState, ReactElement } from 'react'
import cx from 'classnames'
import EditIcon from '../../img/icons/ui/edit.svg'

interface EditToggleProps {
  className?: string
  children: [
    ReactElement<EditToggleContentProps>,
    ReactElement<EditToggleFormProps>
  ] | ReactElement<EditToggleContentProps>
  notEditable?: boolean
}

interface EditToggleContentProps {
  className?: string
}

interface EditToggleFormProps {
  className?: string
}

const EditToggle: FC<EditToggleProps> = ({
  children,
  className,
  notEditable
}) => {
  const [editting, setEditting] = useState(false)
  let Form
  let Content

  React.Children.forEach(
    children,
    (child: ReactElement<EditToggleContentProps | EditToggleFormProps>) => {
      if (child.type === EditToggleContent) {
        Content = child
      } else if (child.type === EditToggleForm) {
        Form = child
      }
    }
  )

  return (
    <div className={cx(className, 'relative pr-100')}>
      <button
        className={cx(
          'absolute pin-t pin-r mt-4 flex items-center text-2xs tracking-loose uppercase font-bold',
          {
            'text-bright-blue-600 hover:text-dark-blue-400 focus:text-dark-blue-400': !notEditable,
            'text-gray-300 cursor-not-allowed': notEditable
          }
        )}
        onClick={() => {
          if (notEditable) {
            return
          }
          setEditting(!editting)
        }}
      >
        {notEditable ? (
          'Not Editable'
        ) : (
          <>
            <EditIcon className="rect-icon-xxs mr-12" /> Edit
          </>
        )}
      </button>

      {editting ? Form : Content}
    </div>
  )
}

export const EditToggleContent: FC<EditToggleContentProps> = ({ children }) => {
  return <>{children}</>
}

export const EditToggleForm: FC<EditToggleFormProps> = ({ children }) => {
  return <>{children}</>
}

export default EditToggle