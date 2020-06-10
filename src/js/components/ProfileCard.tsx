import React, { FC, ReactElement, useState, useEffect, ReactNode } from 'react'
import cx from 'classnames'
import { debounce } from 'lodash'
import Avatar from './Avatar'
import Button from './Button'
import CloseIcon from '../../img/icons/ui/close.svg'

interface ProfileCardProps {
  dropdown?: ReactNode
  cid?: string
  empty?: boolean
  selectable?: boolean
  handleSelect?: () => void
  url?: string
}

interface ProfileCardItemProps {
  count?: number
  isLastChild?: boolean
  label?: string
}

interface ProfileCardHeaderProps {
  cid?: string
  count?: number
  empty?: boolean
  setOpen?: (open: boolean) => void
  heading?: string
  href?: string
  inSelectable?: boolean
  isAssignable?: boolean
  label?: string
  onClick?: () => void
  open?: boolean
  unassignedText?: string
}

const ProfileCard: FC<ProfileCardProps> = ({
  children,
  cid = 'default',
  dropdown,
  handleSelect,
  selectable = false,
  url
}) => {
  const [open, setOpen] = useState(false)
  const count = React.Children.count(children)

  const btnProps = {
    [open ? 'primary' : 'secondary']: true,
    className: 'block w-full sm:mx-auto sm:w-auto',
    small: true,
    onClick: handleSelect
  }

  const clones = React.Children.map(
    children,
    (
      child: ReactElement<ProfileCardHeaderProps | ProfileCardItemProps>,
      index: number
    ) => {
      let props: ProfileCardHeaderProps | ProfileCardItemProps

      if (child.type === ProfileCardItem) {
        props = {
          count,
          isLastChild: index + 1 === count && !selectable
        }
      } else {
        props = {
          cid,
          count,
          setOpen,
          inSelectable: !!selectable,
          open
        }
      }

      return React.cloneElement(child, props)
    }
  )
  const handleResize = debounce(() => {
    if (open) {
      setOpen(false)
    }
  }, 250)
  const header = clones[0]
  const content = clones.slice(1)

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    // cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return (
    <div
      className={cx('relative w-full py-24 border-b', {
        'pl-16 pr-50 sm:flex sm:items-center sm:justify-between sm:px-0': selectable,
        'flex items-center justify-between px-16 sm:px-0': !selectable,
        'bg-bright-blue-100 lg:bg-white': open,
        'sm:bg-white': count < 3
      })}
    >
      {(open && count > 1) && (
        <button
          className="absolute pin-t pin-r mt-20 mr-20"
          aria-expanded={open}
          aria-controls={cid}
          onClick={() => setOpen(false)}
        >
          <CloseIcon aria-hidden="true" className="text-gray-400 rect-icon-sm" />
        </button>
      )}
      <div
        className={cx('w-full', {
          'sm:flex sm:items-end': count < 3,
          'lg:flex lg:items-end': count >= 3
        })}
      >
        {header}
        <div
          id={cid}
          className={cx({
            hidden: !open,
            'sm:flex': count < 3,
            'lg:w-2/3 lg:flex': count >= 3
          })}
        >
          {content}
        </div>
      </div>
      {selectable ? (
        <div className="pl-70 sm:pt-20 sm:p-0 md:pl-20">
          {url ? (
            <Button anchor href={url} {...btnProps}>
              Select
            </Button>
          ) : (
            <Button {...btnProps}>Select</Button>
          )}
        </div>
      ) : (
        dropdown
      )}
    </div>
  )
}

export const ProfileCardHeader: FC<ProfileCardHeaderProps> = ({
  children,
  cid,
  count = 0,
  empty,
  heading,
  href,
  isAssignable = false,
  inSelectable,
  label,
  onClick,
  open,
  setOpen,
  unassignedText
}) => {
  const wrapperClasses = cx('sm:px-20 flex items-center', {
    'lg:w-1/3': count === 3,
    'sm:w-1/2 lg:w-1/3': count === 2,
    'pb-20': open,
    'pb-20 sm:pb-0': inSelectable && !open
  })
  const textClasses = 'pl-20'

  if (isAssignable) {
    const Tag: any = href ? 'a' : empty ? 'button' : 'div'
    const props: ProfileCardHeaderProps = href
      ? { href }
      : onClick
        ? { onClick }
        : {}

    return (
      <Tag
        className={cx(wrapperClasses, {
          'group no-underline text-left block': empty
        })}
        {...props}
      >
        <Avatar
          empty={empty}
          iconSize={empty ? 'rect-icon-2xl' : 'rect-icon-xl'}
        />
        <div className={textClasses}>
          {label && <h3 className="heading-alt text-2xs mb-4">{label}</h3>}
          <h4
            className={cx('heading-tertiary', {
              'text-bright-blue-600': !heading
            })}
          >
            {heading || unassignedText || 'Unassigned'}
          </h4>
          {children && <p>{children}</p>}
        </div>
      </Tag>
    )
  } else {
    return (
      <div className={wrapperClasses}>
        <Avatar iconSize="sm:rect-icon-xl rect-icon-lg" />
        <div className={textClasses}>
          <h3 className="heading text-base leading-normal">{heading}</h3>
          <p className="text-xs leading-normal">{children}</p>
          {count > 1 && (
            <button
              aria-expanded={open}
              aria-controls={cid}
              className={cx(
                'text-xs text-dark-blue-400 cursor-pointer block pt-4',
                {
                  'sm:hidden': count < 3,
                  'lg:hidden': count >= 3
                }
              )}
              onClick={() => setOpen && setOpen(!open)}
            >
              {open ? 'Hide Record' : 'View Record'}
            </button>
          )}
        </div>
      </div>
    )
  }
}

export const ProfileCardItem: FC<ProfileCardItemProps> = ({
  children,
  count = 0,
  isLastChild,
  label
}) => {
  return (
    <div
      className={cx('pl-70', {
        'sm:pl-100 lg:w-1/2 lg:flex lg:justify-center lg:px-20 lg:py-0':
          count >= 3,
        'pl-70 sm:w-auto lg:w-full sm:flex sm:justify-center sm:px-20 sm:py-0':
          count < 3,
        'pb-20': !isLastChild
      })}
    >
      <div>
        {label && (
          <h4 className="heading-alt text-2xs leading-normal">{label}</h4>
        )}
        <p className="text-xs leading-normal">{children}</p>
      </div>
    </div>
  )
}

export const ProfileCardGroup: FC<{ cid: string, className?: string }> = ({
  children,
  cid,
  className
}) => {
  const clones = React.Children.map(
    children,
    (child: ReactElement<ProfileCardProps>, index: number) => {
      let props: ProfileCardProps
      props = {
        cid: `${cid}-${index}`
      }
      return React.cloneElement(child, props)
    }
  )

  return <div className={cx('border-t-2', className)}>{clones}</div>
}

export default ProfileCard
