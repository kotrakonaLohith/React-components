import React, { FC, useState, useEffect } from 'react'
import PlusIcon from '../../../img/icons/ui/plus.svg'
import TrashcanIcon from '../../../img/icons/ui/trashcan.svg'
import EditIcon from '../../../img/icons/ui/edit.svg'
import Avatar from '../Avatar'
import Button from '../Button'
import { ImageInputProps } from './_common'

/**
 * @TODO functionality:
 * depending on implementation this component should have an additional hidden input
 * that clears the image if "delete" is selected (otherwise this input should be ignored
 * since a default value can't be set on a file input)
 */
const ImageInput: FC<ImageInputProps> = ({
  className,
  id,
  label,
  name,
  onChange,
  initialImage,
  text
}) => {
  const [image, setImage] = useState<undefined | string>()

  function setTemporaryImage(e: any) {
    const target = e.target
    const files = target.files

    if (onChange) {
      onChange(e)
    }

    if (FileReader && files && files.length) {
      const fr = new FileReader()
      fr.onload = () => {
        if (typeof fr.result === 'string') {
          setImage(fr.result)
        } else {
          setImage(undefined)
        }
      }
      fr.readAsDataURL(files[0])
    }
  }

  useEffect(() => {
    if (initialImage && !image) {
      setImage(initialImage)
    }
  }, [])

  return (
    <div className={className}>
      <input
        type="file"
        name={name}
        id={id}
        className="sr-only"
        onChange={setTemporaryImage}
      />
      <label
        htmlFor={id}
        className="styled-file-input block cursor-pointer flex items-center"
      >
        <Avatar photo={image} medium iconSize="rect-avatar-md" />
        <div className="ml-24">
          <p className="font-bold">{label}</p>
          <p className="mb-12">{text}</p>
          <span className="btn -secondary -tiny inline-flex items-center">
            {!image ? (
              <>
                <PlusIcon className="rect-icon-xxs mr-10" /> Add
              </>
            ) : (
              <>
                <EditIcon className="rect-icon-xxs mr-10" /> Change
              </>
            )}
          </span>
          {image && (
            <Button
              onClick={e => {
                e.preventDefault()
                setImage(undefined)
              }}
              className="ml-10"
              icon={<TrashcanIcon />}
              secondary
              tiny
            >
              Delete
            </Button>
          )}
        </div>
      </label>
    </div>
  )
}

export default ImageInput
