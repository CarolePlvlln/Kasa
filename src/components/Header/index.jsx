import { Link } from 'react-router-dom'
import React from 'react'
import logo from '../../assets/logo.png'


/*const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`*/

function Header() {
  return (
//    <NavContainer>

      <div>
        <img src={logo} alt='logo-kasa' className='logo-header' />
        <Link to="/">Accueil</Link>
        <Link to="/Apropos">A propos</Link>
      </div>
      
 //   </NavContainer>

  )
}

export default Header