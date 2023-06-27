
import React from 'react'
import backgroundHome from '../../assets/backgroundHome.png'
//import styled from 'styled-components'
//import Card from '../../components/Card'
import { logementsList } from '../../data/logementsList.js'
import home from '../../assets/styles/home.css'




/*const homeLayout = styled.div`
  margin: 20px;
  `

const imgHome = styled.img`
  height: 70px;
  width: 100%;
  `*/

function Home() {

  return (
    <div className='homeLayout' style={home}>
        <img src={backgroundHome} alt='img-background-home' className='img-backgroundHome' />
        <h1>Chez vous, partout et ailleurs</h1>
        <div className='logementsAffiches'>
        {logementsList.map(({ id, title, cover,}) =>
        <div key={id}>
        <logementList
          cover={cover}
          title={title}
        />
        </div>
           )}    
        </div>
    </div>
    )}
        
        

  
  export default Home