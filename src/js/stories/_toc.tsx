import React, { FC } from 'react'
import { PageNav, PageNavItem } from './index'
import { strToId } from './_utils'

interface TOCProps {
  items?: string[]
}

function inIframe() {
  try {
    return window.self !== window.top
  } catch (e) {
    return true
  }
}

const TOC: FC<TOCProps> = ({ items }) => {
  if (inIframe()) {
    return (
      <a
        className="block font-bold no-underline text-dark-blue-400 hover:text-dark-blue-300 mb-32"
        target="_blank"
        href="#"
      >
        Open Full Doc Page
      </a>
    )
  } else {
    return (
      <PageNav className="mb-32" active={strToId(items ? `#${items[0]}` : '')}>
        {items &&
          items.map(item => {
            const id = strToId(item)
            return (
              <PageNavItem key={id} href={`#${id}`}>
                {item}
              </PageNavItem>
            )
          })}
      </PageNav>
    )
  }
}

export default TOC
