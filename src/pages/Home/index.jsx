
//import { StyledLink } from '../../utils/style/Atoms'
//echo "# Kasa" >> README.mdimport backgroundHome from '../../assets/backgroundHome.png'
import React from 'react'
import backgroundHome from '../../assets/backgroundHome.png'



/*const HomeLogo = styled.img`
  height: 70px;
`*/

function Home() {
    return (
      <div>
        <img src={backgroundHome} alt='img-background-home' className='img-backgroundHome' />
        <logementsContainer></logementsContainer>
      </div>
    )
  }
  
  export default Home