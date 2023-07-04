import React from 'react'
import {useState} from 'react';
//import logementList from '../../data';
//import Card from '../../components/Card'
import backgroundLogement from '../../assets/backgroundLogement.png'
import logement from './logement.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
//The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>. Child routes inherit all params from their parent routes.
import { useParams } from 'react-router-dom';
import logementsList from '../../data/logementsList.json'


function Logement () {
//récupère ce qu'il y a dans url
 const params = useParams()
 //Déclarer variable logementFiltre
 let logementFiltre
 //boucle for pour parcourir logement et comparer ID 
  for (let i=0; i<logementsList.length; i++) {
    if (logementsList[i].id==params.id){
      //logementFiltre=logement avec id=
      logementFiltre=logementsList[i]
  }
  }
    
  //vérifer si ID = ID logement cliqué fonction filter ? ou reduce
  
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
  // visibilité
    setIsShown(current => !current);
  };
  
  return (
          <section className='layout' style={logement}>
          <img src={backgroundLogement} alt='img-background-logements' className='img-backgroundLogements' />
            <article className='logement'>
            <div className='logement__titreEtAgent'>
              <div className='titreLocalisation'>
                <h2>{logementFiltre.title}</h2>
                <h3>{logementFiltre.location}</h3> 
              </div>
              <div className='agent'>
                <h3>{logementFiltre.host.name}</h3>
                <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-4.jpg" alt='portrait-agent' /> 
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
              <FontAwesomeIcon icon={faStar} className='star'/> 
              <FontAwesomeIcon icon={faStar} className='star'/>
              <FontAwesomeIcon icon={faStar} className='star'/>
              <FontAwesomeIcon icon={faStar} className='star'/>           
              </div>
            </div>
            <div className='descriptionEquipements'>
              <div className='btnScroll'>

                {/*Apeler composant Collapse*/}
                <button className='button' type="button" onClick={handleClick}>Description<FontAwesomeIcon icon={faChevronDown} className='icon'/></button>
                {isShown ? (
                <div className="description collapse">
                <p>Description</p>
                </div>
                ) : null}
            </div>
            <div className='btnScroll'>
              <button className='button' type="button" onClick={handleClick}>Equipements<FontAwesomeIcon icon={faChevronDown} className='icon'/></button>
              {isShown ? (
              <div className="equipement collapse">
              <p>Equipements</p>
              </div>
              ) : null}
              </div>
            </div>
          </article>    
    </section>)
}

export default Logement