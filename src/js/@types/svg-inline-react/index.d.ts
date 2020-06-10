declare module 'svg-inline-react' {
  import * as React from 'react'

  export interface InlineSVGProps {
    element?: string
    raw?: boolean
    src: string
  }

  class InlineSVG extends React.Component<InlineSVGProps> {}

  export default InlineSVG
}
