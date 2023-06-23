import React from 'react'
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

    
export default Card