import React from 'react'
import Wrapper from '../_wrapper'

// Logos
import Logo from '../../../img/icons/logos/logo.svg'
import LogoWhite from '../../../img/icons/logos/logo-white.svg'
import LogoSimple from '../../../img/icons/logos/logo-simple.svg'

export default () => {
  return (
    <Wrapper title="Circles Icons">
      <Logo aria-hidden="true" className="rect-logo"/>

      <div className="bg-dark-blue-500 p-12">
        <LogoWhite aria-hidden="true" className="rect-logo" />
      </div>

      <LogoSimple aria-hidden="true" className="rect-icon-xl" />
    </Wrapper>
  )
}
