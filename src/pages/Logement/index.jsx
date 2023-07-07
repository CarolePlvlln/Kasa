import React from 'react'
import logement from './logement.scss'
import {Carousel, CarouselItem} from '../../components/SlideShow';
import star_active from '../../assets/icons/star_active.png';
//import star_inactive from '../../assets/icons/star_inactive.png';
//The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>. Child routes inherit all params from their parent routes.
import { useParams } from 'react-router-dom';
import logementsList from '../../data/logementsList.json';
import Collapse from '../../components/Collapse'


function Logement () {
//récupère ce qu'il y a dans url
 const params = useParams()
 //Déclarer variable logementFiltre
 let logementFiltre
 //boucle for pour parcourir logement et comparer ID 
  for (let i=0; i<logementsList.length; i++) {
    if (logementsList[i].id===params.id){
      //logementFiltre=logement avec id=
      logementFiltre=logementsList[i]
  }
  }
    

  //vérifer si ID = ID logement cliqué fonction filter ? ou reduce
  
  /*const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
  // visibilité
    setIsShown(current => !current);
  };*/
  
  return (
          <section className='layout' style={logement}>
          <div className='slideShow'>
          <Carousel>
            {logementFiltre.pictures.map(picture=>{
                  return(<CarouselItem key={picture}><img src={picture} alt="photos carousel" className='picture'/></CarouselItem>)
                })}
          </Carousel>
        </div>
            <article className='logement'>
              <div className='logement__titreEtAgent'>
                <div className='titreLocalisation'>
                  <h2>{logementFiltre.title}</h2>
                  <h3>{logementFiltre.location}</h3> 
                </div>
                <div className='agent'>
                  <h3>{logementFiltre.host.name}</h3>
                  <img src={logementFiltre.host.picture} alt='portrait-agent' /> 
                </div>
              </div> 
              <div className='logement__btnIcon'>
                <div className='btn'>
                  {/*parcourir tag de logementFiltre. Retourne chaque tag dans un bouton*/}
                  {logementFiltre.tags.map(tag=>{
                    return(<button key={tag}>{tag}</button>)
                  })}
                </div>
                <div className='iconStar'>
                  <img src={star_active} alt="icon_arrow-down" className='iconStar'/> 
                  <img src={star_active} alt="icon_arrow-down" className='iconStar'/> 
                  <img src={star_active} alt="icon_arrow-down" className='iconStar'/> 
                  <img src={star_active} alt="icon_arrow-down" className='iconStar'/>       
                </div>
              </div>
              <div className='descriptionEquipements'>
                <div className='btnScroll'>
                  <div className='collapse'>
                    <Collapse label="Description">
                      <p>{logementFiltre.description}</p>
                    </Collapse>
                  </div>
                  <div className='collapse'>
                    <Collapse label="Equipements">
                      <p>{logementFiltre.equipments}</p>
                    </Collapse>
                  </div>
                  </div>
                </div>
              
          </article>    
    </section>
    )
}

export default Logement