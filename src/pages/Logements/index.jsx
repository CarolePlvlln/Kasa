import React from 'react'
import Card from '../../components/Card'
import backgroundLogement from '../../assets/backgroundLogement.png'
import logements from './logements.scss'


function Logements() {

  return (
    <div className='layout-logements' style={logements}>
        <img src={backgroundLogement} alt='img-background-logements' className='img-backgroundLogements' />
    <Card></Card>
                <div>  </div>
                    
        </div>)
}

export default Logements