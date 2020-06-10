import React, { FC } from 'react'

interface WrapperProps {
  title?: string
}

const Wrapper: FC<WrapperProps> = ({ title, children }) => (
  <section className="p-20 max-w-container">
    {title && (
      <header className="border-b mb-20 pb-12">
        <h1 className="heading-tertiary">{title}</h1>
      </header>
    )}
    {children}
  </section>
)

export default Wrapper
