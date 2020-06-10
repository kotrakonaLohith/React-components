import React, { Component, Fragment, createRef } from 'react'
import cx from 'classnames'
import createFocusTrap, { FocusTrap } from 'focus-trap'
import Button from './Button'
import InformationIcon from '../../img/icons/circles/information.svg'
import CloseIcon from '../../img/icons/ui/close.svg'
import TailwindConfig from '#tailwind'

interface State {
  open: boolean
  pinLeft: boolean
}

interface Props {
  alt?: boolean
  className?: string
  inline?: boolean
}

export default class Tooltip extends Component<Props, State> {
  ref = createRef<HTMLDivElement>()
  containerRef = createRef<HTMLDivElement>()
  focusTrap: FocusTrap | null

  state = {
    open: false,
    pinLeft: true
  }

  componentDidMount() {
    if (!this.ref.current) {
      return
    }

    this.focusTrap = createFocusTrap(this.ref.current, {
      clickOutsideDeactivates: true,
      onDeactivate: () => {
        this.setState({
          open: false
        })
      }
    })
  }

  componentWillUnmount() {
    this.focusTrap = null
  }

  render() {
    const { alt, children, className, inline } = this.props
    const { open, pinLeft } = this.state

    return (
      <Fragment>
        <div
          ref={this.containerRef}
          className={cx('relative rect-icon-sm', className)}
        >
          <Button
            className={cx({ 'absolute pin-t pin-l mt-2': inline })}
            icon={<InformationIcon />}
            iconClass="rect-icon-sm rounded-full border border-gray-600 text-gray-600"
            onClick={this.open}
            plain
            type="button"
          />
          {/* @TODO: position smartly based on screen location */}
          <div
            ref={this.ref}
            className={cx(
              'absolute pin-t w-tooltip z-top pointer-events-none',
              {
                hidden: !open,
                'mx-8 mt-10': inline,
                'm-8': !inline,
                'pin-l': pinLeft,
                'pin-r': !pinLeft
              }
            )}
          >
            <div
              className={cx(
                'font-normal text-base relative py-16 pl-16 pr-50 shadow inline-block pointer-events-auto',
                {
                  'bg-white border': !alt,
                  'bg-bright-blue-600 text-white': alt
                }
              )}
            >
              <Button
                className="absolute pin-r pin-t m-12"
                icon={<CloseIcon />}
                iconClass={cx('rect-icon-sm', {
                  'text-gray-300': !alt,
                  'text-white': alt
                })}
                onClick={this.close}
                plain
                type="button"
              />
              {children}
            </div>
          </div>
        </div>
      </Fragment>
    )
  }

  close = () => {
    this.focusTrap!.deactivate()
  }

  open = () => {
    const rect =
      this.containerRef.current &&
      this.containerRef.current.getBoundingClientRect()
    const distToEdge = rect && window.innerWidth - rect.right
    const tooltipSize = parseInt(TailwindConfig.width.tooltip, 10) * 16

    this.setState(
      {
        open: true,
        pinLeft: distToEdge && tooltipSize ? distToEdge > tooltipSize : true
      },
      () => {
        this.focusTrap!.activate()
      }
    )
  }
}
