//simport { Link } from 'react-router'
import React from 'react'
import backgroundApropos from '../../assets/backgroundApropos.png'
import apropos from '../../assets/styles/apropos.css'

function Apropos() {
    return (
      <div className='layout-a-propos' style={apropos}>
        <img src={backgroundApropos} alt='img-background-a-propos' className='img-backgroundApropos' />
        <div></div>
      </div>
    )
  }
  
  export default Apropos