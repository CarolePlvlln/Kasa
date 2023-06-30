import { Link } from 'react-router-dom'
import React from 'react'
import logo from '../../assets/logo.png'
//import head from '../../assets/styles/head.scss'
import head from './header.scss'



/*const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`*/

function Header() {
  return (
  <div className='nav-container' style={head}>

        <img src={logo} alt='logo-kasa' className='nav-container__logo' />
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/Apropos">A propos</Link></li>
        </ul>
        
        

  </div>

  )
}

export default Header