//simport { Link } from 'react-router'
import React from 'react'
import backgroundApropos from '../../assets/backgroundApropos.png'
import apropos from './apropos.scss'

function Apropos() {
    return (
      <div className='layout' style={apropos}>
        <img src={backgroundApropos} alt='img-background-a-propos' className='layout__img-background' />
        <div className='layout__infos'>
          <button className='layout__infos--button'>Fiabilité</button>
          <button className='layout__infos--button'>Respect</button>
          <button className='layout__infos--button'>Service</button>
          <button className='layout__infos--button'>Sécurité</button>
        </div>
      </div>
    )
  }
  
  export default Apropos