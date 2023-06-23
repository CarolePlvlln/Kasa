
import React from 'react'
import backgroundHome from '../../assets/backgroundHome.png'
//import Card from '../../components/Card'
import { logementsList } from '../../data/logementsList.js'



/*const HomeLogo = styled.img`
  height: 70px;
`*/

function Home() {

  return (
    <div>
        <img src={backgroundHome} alt='img-background-home' className='img-backgroundHome' />
        <div>
        {logementsList.map(({ id, title, cover,}) =>
        <div key={id}>
        <logementList
          cover={cover}
          title={title}
        />
        </div>
           )}    
    </div></div>
    )}
        
        

  
  export default Home