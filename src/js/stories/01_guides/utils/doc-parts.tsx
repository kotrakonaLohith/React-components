import React, { FC } from 'react'
import cx from 'classnames'

interface WrapperProps {
  title: string
  full?: boolean
  wide?: boolean
}

export const DocWrapper: FC<WrapperProps> = ({
  title,
  full,
  wide,
  children
}) => (
  <section>
    {title && (
      <header className="p-20 bg-dark-blue-500">
        <h1 className="antialiased heading-tertiary text-white">{title}</h1>
      </header>
    )}
    <div
      className={cx({
        'p-20': wide || !full,
        'max-w-narrow': !full && !wide
      })}
    >
      {children}
    </div>
  </section>
)

export const DosDonts: FC = ({ children }) => {
  return <ul className="list mb-20">{children}</ul>
}

export const Do: FC = ({ children }) => {
  return (
    <li className="text-gray-500">
      <strong className="text-green-600">DO:</strong> {children}
    </li>
  )
}

export const Dont: FC = ({ children }) => {
  return (
    <li className="text-gray-500">
      <strong className="text-red-600">DON'T:</strong> {children}
    </li>
  )
}
