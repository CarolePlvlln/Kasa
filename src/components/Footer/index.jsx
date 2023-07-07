import React from 'react'
import logo from '../../assets/logo.png'
import footer from './footer.scss'

function Footer() {
    return (
    <div className='footer' style={footer}>
      <div className='footer__logo'>
          <img src={logo} alt='logo-kasa' className='logo' />
          <p> 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  
    )
  }
  
  export default Footer