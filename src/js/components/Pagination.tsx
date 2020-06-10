import React, { FC, MouseEvent, ReactElement } from 'react'
import cx from 'classnames'

interface Labels {
  next: string
  prev: string
}

interface PaginationItemsProps {
  handleClick?: (e: MouseEvent<HTMLElement>) => void
  ellipsis?: boolean
  isActiveChild?: boolean
  itemClasses?: string
  itemLinkClasses?: string
  url?: string
}

interface PaginationProps {
  avoidUppercase?: boolean
  className?: string
  children: Array<ReactElement<PaginationItemsProps>>
  currentItem: number
  labels?: Labels
  onSelect?: (attrs: { index: number; url?: string }) => void
}

export const PaginationItem: FC<PaginationItemsProps> = ({
  children,
  ellipsis,
  handleClick,
  isActiveChild,
  itemClasses,
  itemLinkClasses,
  url
}) => {
  const itemSpacingClasses = 'px-12'
  return (
    <li className={itemClasses}>
      {isActiveChild || ellipsis ? (
        <span className={itemSpacingClasses}>
          {children}
        </span>
      ) : (
        <a
          className={itemLinkClasses + ' ' + itemSpacingClasses}
          href={url}
          onClick={handleClick}
        >
          {children}
        </a>
      )}
    </li>
  )
}

// @TODO may need to add lifecycle to make more dynamic later
export const Pagination: FC<PaginationProps> = ({
  className,
  children,
  currentItem = 0,
  onSelect,
  // @TODO replace with simple "lang_key" prop to look up translations (?)
  labels = { next: 'next >>', prev: '<< prev' },
  // @TODO use for languages where uppercase is undesirable
  avoidUppercase
}) => {
  const classes = cx(className, 'flex')
  const itemClasses = cx('text-sm text-gray-400 font-bold cursor-default', {
    uppercase: !avoidUppercase
  })
  const itemLinkClasses =
    'no-underline text-dark-blue-400 focus:text-dark-blue-200 hover:text-dark-blue-200 cursor-pointer'
  const { next, prev } = labels
  const clones = React.Children.map(
    children,
    (child: ReactElement<PaginationItemsProps>, index) => {
      return React.cloneElement(child, {
        itemClasses,
        itemLinkClasses,
        isActiveChild: index === currentItem,
        handleClick: (e: MouseEvent<HTMLElement>) => {
          if (onSelect) {
            e.preventDefault()
            onSelect({ index, url: child.props.url })
          }
        }
      })
    }
  )

  function goToPrev(url?: string) {
    if (onSelect) {
      if (currentItem - 1 >= 0) {
        onSelect({ index: currentItem - 1, url })
      }
    }
  }

  function goToNext(url?: string) {
    if (onSelect) {
      if (currentItem + 1 <= children.length - 1) {
        onSelect({ index: currentItem + 1, url })
      }
    }
  }

  function renderPrevNext(isPrev: boolean) {
    const compare = isPrev ? 0 : children.length - 1
    const prevNextClasses = isPrev ? 'mr-40' : 'ml-40'

    return (
      <li className={itemClasses + ' ' + prevNextClasses}>
        {currentItem !== compare ? (
          <a
            className={cx(itemLinkClasses, 'cursor-pointer')}
            onClick={(e: MouseEvent<HTMLElement>) => {
              if (onSelect) {
                e.preventDefault()
                isPrev
                  ? goToPrev(children[currentItem - 1].props.url)
                  : goToNext(children[currentItem + 1].props.url)
              }
            }}
            href={
              isPrev
                ? children[currentItem - 1].props.url
                : children[currentItem + 1].props.url
            }
          >
            {isPrev ? prev : next}
          </a>
        ) : isPrev ? (
          prev
        ) : (
          next
        )}
      </li>
    )
  }

  return (
    <nav className={classes}>
      <ul className="flex list-reset">
        {renderPrevNext(true)}
        {clones}
        {renderPrevNext(false)}
      </ul>
    </nav>
  )
}
