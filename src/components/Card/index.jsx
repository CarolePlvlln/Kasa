import React from 'react'
import PropTypes from 'prop-types'
//import styled from 'styled-components'
import card from './card.scss'


function Card({id, title, cover}) {

    return (
        <div style={card} className='logements'>
            <p>{title}</p>
            <img src={cover} alt="" onClick= {(e) => {
      e.preventDefault();
      window.location.href='http://localhost:3001/Logements';
      }}/>
        </div>
    )
  }

  Card.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    cover: PropTypes.string,
}
 
    
export default Card