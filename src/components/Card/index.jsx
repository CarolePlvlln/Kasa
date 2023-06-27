import React from 'react'
import PropTypes from 'prop-types'
//import styled from 'styled-components'
import { logementsList } from '../../data/logementsList.js'

function Card() {

    return (
      <div>
          {logementsList.map((logement,id) => (
            
                  <logementsList
                      key={`${logement.name}-${id}`}
                      title={logement.title}
                      cover={logement.cover}
                      description={logement.description}
                      host={logement.host}
                      //hostProfile={logement.host-${picture}}
                      rating={logement.rating}
                      location={logement.location}
                      equipments={logement.equipments}
                      />
              ))}
          </div>)
  }

  Card.propTypes = {
    label: PropTypes.string,
    title: PropTypes.string,
    picture: PropTypes.string,
}
 
    
export default Card