import React from 'react'
import logo from '../../assets/logo.png'
import footer from './footer.scss'

function Footer() {
    return (
    <div className='footer' style={footer}>
          <img src={logo} alt='logo-kasa' className='footer__logo' />
          <p> 2020 Kasa. All rights reserved</p>
    </div>
  
    )
  }
  
  export default Footer