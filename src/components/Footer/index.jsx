import React from 'react'
import logo from '../../assets/logo.png'
import footer from '../../assets/styles/footer.css'

function Footer() {
    return (
    <div className='footer' style={footer}>
          <img src={logo} alt='logo-kasa' className='logo-footer' />
          <p> 2020 Kasa. All rights reserved</p>
    </div>
  
    )
  }
  
  export default Footer