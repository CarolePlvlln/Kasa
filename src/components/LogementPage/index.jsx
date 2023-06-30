import React from 'react';
import PropTypes from 'prop-types';
import {useState} from 'react';
//import styled from 'styled-components'
import logementPage from './logementPage.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';

function LogementPage({id, title, location, host, tags, description, equipements}) {

    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
      // 👇️ toggle visibility
      setIsShown(current => !current);
    }

    return (
        <article className='logement' style={logementPage}>
          <div className='logement__titreEtAgent'>
            <div className='titreLocalisation'>
              <h2>{title}</h2>
              <h3>{location}</h3> 
            </div>
            <div className='agent'>
              <h3>{host}</h3>
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
                <div className="description collapse">
                <p>{description}</p>
                </div>
                ) : null}
            </div>
            <div className='btnScroll'>
              <button className='button' type="button" onClick={handleClick}>Equipements<FontAwesomeIcon icon={faChevronDown} className='icon'/></button>
              {isShown ? (
              <div className="equipement collapse">
              <p>{equipements}</p>
              </div>
              ) : null}
              </div>
            </div>
          </article>       
    )
  }

  logementPage.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    location: PropTypes.string,
    host: PropTypes.string,
    description: PropTypes.string,
    equipements: PropTypes.string,
    

}
 
    
export default LogementPage