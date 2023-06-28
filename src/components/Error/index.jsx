import React from 'react'
import { Link } from 'react-router-dom'
import error404 from './error404.scss'


function Error() {
    return (
      <div className='error404-layout' style={error404}>
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <Link to="/Home">Retourner sur la page d'accueil</Link>
      </div>
    )
  }
  
  export default Error