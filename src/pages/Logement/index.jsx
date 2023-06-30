import React from 'react'
import {useState} from 'react';
//import Card from '../../components/Card'
import backgroundLogement from '../../assets/backgroundLogement.png'
import logement from './logement.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';

function Logements() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    // 👇️ toggle visibility
    setIsShown(current => !current);
  };
  return (
    <section className='layout' style={logement}>
        <img src={backgroundLogement} alt='img-background-logements' className='img-backgroundLogements' />
          <article className='logement'>
          <div className='logement__titreEtAgent'>
            <div className='titreLocalisation'>
              <h2>Titre Logement</h2>
              <h3>Localisation</h3> 
            </div>
            <div className='agent'>
              <h3>Nom de l'agent</h3>
              <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-4.jpg" alt='portrait-agent' /> 
            </div>
          </div> 
            <div className='logement__btnIcon'>
              <div className='btn'>
                <button>tag</button>
                <button>tag</button>
                <button>tag</button>
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
                <button className='button' type="button" onClick={handleClick}>Description<FontAwesomeIcon icon={faChevronDown} className='icon'/></button>
                {isShown ? (
                <div class="description">
                <p>Bla Bla</p>
                </div>
                ) : null}
            </div>
            <div className='btnScroll'>
              <button className='button' type="button" onClick={handleClick}>Equipements<FontAwesomeIcon icon={faChevronDown} className='icon'/></button>
              {isShown ? (
                <div class="description">
                <p>Bla Bla</p>
                </div>
                ) : null}
                </div>
            </div>
          </article>       
    </section>)
}

export default Logements