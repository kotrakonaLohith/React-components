import React, { Fragment, Component } from 'react'
import cx from 'classnames'
import CollapseIcon from '../../img/icons/squares/collapse.svg'
import ExpandIcon from '../../img/icons/squares/expand.svg'

interface MoreState {
  open: boolean
}

interface MoreProps {
  className?: string
  label?: string
}

export default class More extends Component<MoreProps, MoreState> {
  state = {
    open: false
  }

  render() {
    const { open } = this.state
    const { className, children, label = 'More' } = this.props
    return (
      <Fragment>
        <button
          onClick={this.toggle}
          className={cx(
            className,
            'group flex items-center font-bold text-gray-600 text-lg hover:text-dark-blue-400'
          )}
        >
          {open ? (
            <CollapseIcon
              className="text-white fill-neutral rect-icon-sm mr-10 group-hover:fill-dark"
              aria-hidden="true"
            />
          ) : (
            <ExpandIcon
              aria-hidden="true"
              className="text-white fill-neutral rect-icon-sm mr-10 group-hover:fill-dark"
            />
          )}{' '}
          {label}
        </button>
        {open && children}
      </Fragment>
    )
  }

  toggle = () => {
    this.setState(prevState => {
      return {
        open: !prevState.open
      }
    })
  }
}
