import React, { FC, MouseEvent, ReactElement } from 'react'
import cx from 'classnames'

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  anchor?: boolean
  avoidUppercase?: boolean
  destructive?: boolean
  href?: string
  icon?: ReactElement
  iconClass?: string
  large?: boolean
  onClick?: (e: MouseEvent<HTMLElement>) => void
  plain?: boolean
  primary?: boolean
  secondary?: boolean
  small?: boolean
  text?: boolean
  textLight?: boolean
  textIcon?: ReactElement
  tiny?: boolean
}

const Button: FC<ButtonProps> = ({
  anchor,
  avoidUppercase, // use for languages where uppercase is undesirable
  children,
  className,
  destructive,
  icon,
  iconClass,
  large,
  plain,
  primary,
  secondary,
  small,
  text,
  textLight,
  textIcon,
  tiny,
  ...props
}) => {
  const classes = cx(className, {
    btn: !text && !plain,
    '-primary': primary && !text,
    '-secondary': secondary && !text,
    '-destructive': destructive && !text,
    '-tiny': tiny && !text,
    '-small': small && !text,
    '-large': large && !text,
    'txt-btn': text && !textLight,
    'txt-btn-light': text && textLight,
    'txt-btn-icon text-2xs uppercase inline-flex items-center leading-tight':
      text && textIcon,
    'normal-case': avoidUppercase,
    'inline-flex items-center': icon
  })

  const Tag: any = anchor ? 'a' : 'button'
  const displayIcon = icon || textIcon

  return (
    <Tag className={classes} {...props}>
      {displayIcon &&
        React.cloneElement(displayIcon, {
          'aria-hidden': true,
          className: cx(iconClass, 'block', {
            'rect-icon-xs': !iconClass,
            'mr-8': !!children
          })
        })}
      {children}
    </Tag>
  )
}

export default Button
