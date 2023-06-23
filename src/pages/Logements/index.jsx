import React from 'react'
import Card from '../../components/Card'
import backgroundLogement from '../../assets/backgroundLogement.png'
import { logementsList } from '../../data/logementsList.js'

function Logements() {

  return (
    <div>
        <img src={backgroundLogement} alt='img-background-home' className='img-backgroundLogement' />
        {logementsList.map((logement, index) => (
                <Card
                    key={`${logement.name}-${index}`}
                    title={logement.name}
                    cover={logement.cover}
                    description={logement.description}
                    hostName={logement.host}
                    //hostProfile={logement.host-${picture}}
                    rating={logement.rating}
                    location={logement.location}
                    equipments={logement.equipements}
                    />
            ))}
        </div>)
}

export default Logements