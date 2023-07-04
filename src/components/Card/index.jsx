import React from 'react'
import PropTypes from 'prop-types'
//import styled from 'styled-components'
import card from './card.scss'
import { useNavigate } from 'react-router-dom'

/*useNavigation is a hook which gives access to navigation object. It's useful when you cannot pass the navigation prop into the component directly, or don't want to pass it in case of a deeply nested child.
useNavigation() returns the navigation prop of the screen it's inside.*/

function Card({id, title, cover}) {
const navigate= useNavigate()

    return (
        <div style={card} className='logements'>
            <p>{title}</p>
            <img src={cover} alt="" onClick= {(e) => {
      navigate(`/Logement/${id}`)
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