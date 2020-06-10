import React, { FC, useState, useRef, useEffect } from 'react'
import cx from 'classnames'
import { createPortal } from 'react-dom'
import createFocusTrap, { FocusTrap } from 'focus-trap'
import TailwindConfig from '#tailwind'
import DownIcon from '../../../img/icons/arrows/down.svg'
import CloseIcon from '../../../img/icons/circles/close.svg'
import { commonLabelClasses } from './_common'
import Tooltip from '../Tooltip'

const CustomSelect: FC<{
  background?: 'bg-bright-blue-100' | 'bg-white'
  className?: string
  full?: boolean
  handleClear?: () => void
  label?: string
  selected?: boolean
  alt?: boolean
  id?: string
  topper?: string
  tooltip?: string
}> = ({
  alt,
  background = 'bg-white',
  children,
  className,
  full,
  handleClear,
  id,
  label = '--Select--',
  selected,
  tooltip,
  topper
}) => {
  const [open, setOpen] = useState(false)
  const [cords, setCords] = useState<ClientRect | null>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  let buttonRect: ClientRect | null = null

  const setButtonRect = () => {
    if (!!buttonRef.current) {
      buttonRect = buttonRef.current.getBoundingClientRect()
    }

    setCords(buttonRect)
  }

  // reposition dropdown on window resize
  useEffect(
    () => {
      setButtonRect()
      window.addEventListener('resize', setButtonRect)

      return () => window.removeEventListener('resize', setButtonRect)
    },
    [buttonRef]
  )

  return (
    <>
      {!!topper && (
        <h5 className={commonLabelClasses}>
          {topper}
          {tooltip && (
            <Tooltip alt inline className="inline-block ml-8">
              <p>{tooltip}</p>
            </Tooltip>
          )}
        </h5>
      )}
      <div className={cx('relative', className, { 'z-middle': open })}>
        <button
          id={id || undefined}
          type="button"
          ref={buttonRef}
          onClick={() => {
            setOpen(!open)
          }}
          className={cx(
            background,
            'relative w-full appearance-none',
            'rounded-px border',
            'pl-16 pr-40 py-8',
            'text-xs text-left leading-normal',
            'focus:border-dark-blue-400',
            {
              'text-gray-600': selected,
              'text-gray-400': !selected,
              'border-dark-blue-400 pointer-events-none': open
            }
          )}
        >
          <span className="block whitespace-no-wrap overflow-hidden text-overflow-ellipsis">
            {label}
          </span>
          {(!selected || (selected && !handleClear))  && (
            <DownIcon
              aria-hidden="true"
              className="absolute pin-r pos-vertical-center mr-12 rect-icon-sm pointer-events-none text-bright-blue-600"
            />
          )}
          {open && !alt && <span className="custom-select-pointer" />}
        </button>
        {selected &&
          handleClear && (
            <button
              aria-hidden="true"
              className="absolute pin-r pos-vertical-center mr-12"
              onClick={handleClear}
              tabIndex={-1}
              type="button"
            >
              <CloseIcon
                aria-hidden="true"
                className="text-gray-300 rect-icon"
              />
            </button>
          )}
        {open && (
          <CustomSelectContent
            handleClose={() => {
              setOpen(false)
            }}
            alt={alt}
            background={background}
            cords={cords}
            full={full}
          >
            {children}
          </CustomSelectContent>
        )}
      </div>
    </>
  )
}

export const CustomSelectContent: FC<{
  alt?: boolean
  background?: string
  cords: ClientRect | null
  full?: boolean
  handleClose: () => void
}> = ({ alt, background, children, cords, full, handleClose }) => {
  const margin = TailwindConfig.margin[20]
  const dropdownRef = useRef<HTMLDivElement>(null)
  let focusTrap: FocusTrap | null = null

  // set up focus trap
  useEffect(
    () => {
      if (dropdownRef.current) {
        focusTrap = createFocusTrap(dropdownRef.current, {
          clickOutsideDeactivates: true,
          onDeactivate: () => {
            handleClose()
          }
        })

        focusTrap.activate()
      }

      return () => {
        if (focusTrap) {
          focusTrap.deactivate()
          focusTrap = null
        }
      }
    },
    [dropdownRef]
  )

  function getStyles() {
    if (!cords) {
      return
    }

    const winWidth = window.innerWidth
    const left = full ? margin : cords.left - 60
    const right = full ? margin : winWidth - (cords.right + 60)
    const top = cords.bottom

    if (alt) {
      return {
        top,
        left: cords.left,
        right: winWidth - cords.right
      }
    } else {
      // @TODO improvement: make up the size if flush to the edge on either side
      return {
        top,
        left: left < 0 ? 0 : left,
        right: right < 0 ? 0 : right
      }
    }
  }

  return createPortal(
    <div
      ref={dropdownRef}
      style={getStyles()}
      className={cx(
        background,
        'custom-select absolute pin-t border shadow z-bottom',
        {
          'p-20': alt,
          'p-40 mt-4': !alt
        }
      )}
    >
      {children}
    </div>,
    document.body
  )
}

export default CustomSelect
