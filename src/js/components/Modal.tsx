import React, { Fragment, Component } from 'react'
import Button from './Button'
import { DialogOverlay, DialogContent } from '@reach/dialog'
import CloseIcon from '../../img/icons/ui/close.svg'

interface ModalState {
  open: boolean
}

interface ModalProps {
  showCloseBtn?: boolean
}

export default class Modal extends Component<ModalProps, ModalState> {
  state = {
    open: false
  }

  render() {
    const { open } = this.state
    const { children, showCloseBtn } = this.props

    return (
      <Fragment>
        <Button text anchor onClick={this.toggle}>
          Show Dialog
        </Button>

        <DialogOverlay isOpen={open} onDismiss={this.toggle}>
          <DialogContent>
            {showCloseBtn ? (
              <Button
                className="absolute pin-r pin-t mt-32 mr-20 md:mr-32"
                icon={<CloseIcon />}
                iconClass="rect-icon-sm text-gray-300"
                onClick={this.toggle}
                plain
                type="button"
              />
            ) : null}

            <div className="md:min-w-form-content">
              <div className="mb-32">{children}</div>
            </div>
          </DialogContent>
        </DialogOverlay>
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
