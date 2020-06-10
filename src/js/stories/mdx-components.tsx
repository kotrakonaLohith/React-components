import React, { FC } from 'react'
import Prism from 'prismjs'
import './_css/prism.css'
import { strToId } from './_utils'

interface Props {
  className?: string
}

const components: { [s: string]: FC<Props> } = {
  code: ({ children, className }) => {
    // @TODO improvement: use classname to determined language
    if (typeof children !== 'string') {
      return <code />
    }
    const highlighted = Prism.highlight(children, Prism.languages.jsx)
    return <code dangerouslySetInnerHTML={{ __html: highlighted }} />
  },
  ul: ({ children }) => {
    return <ul className="list mb-12">{children}</ul>
  },
  ol: ({ children }) => {
    return <ol className="list mb-12">{children}</ol>
  },
  h1: ({ children }) => {
    return <h1 className="heading-secondary mb-32">{children}</h1>
  },
  h2: ({ children }) => {
    return (
      <h2 id={strToId(children)} className="heading-tertiary mb-32">
        {children}
      </h2>
    )
  },
  h3: ({ children }) => {
    return <h3 className="heading-alt text-sm mb-32">{children}</h3>
  },
  h4: ({ children }) => {
    return <h4 className="heading-alt text-xs mb-32">{children}</h4>
  },
  h5: ({ children }) => {
    return <h5 className="heading text-xs mb-32">{children}</h5>
  },
  h6: ({ children }) => {
    return <h6 className="heading text-2xs mb-32">{children}</h6>
  },
  p: ({ children }) => {
    return <p className="mb-32">{children}</p>
  },
  blockquote: ({ children }) => {
    return <blockquote className="italic text-gray-400">{children}</blockquote>
  }
}

export default components
