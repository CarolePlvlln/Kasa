//simport { Link } from 'react-router'
import React from 'react'
import backgroundApropos from '../../assets/backgroundApropos.png'
import apropos from './apropos.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';

 function Apropos() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    // 👇️ toggle visibility
    setIsShown(current => !current);
    
  };

  return (
    <div className='layout' style={apropos}>
    
        <img src={backgroundApropos} alt='img-background-a-propos' className='layout__img-background' />

        <div className='layout__infos'>

          <div className='layout__infos--divBtn'>
            <button className='bouton' type="button" onClick={handleClick}>Fiabilité<FontAwesomeIcon icon={faChevronDown} className='icon'/></button>
            {isShown ? (
              <div class="collapse1 collapse">
              <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
              régulièrement vérifiées par nos équipes.</p>
              </div>
            ) : null}
          </div>
        

          <div className='layout__infos--divBtn'>
            <button className='bouton' type="button" onClick={handleClick}>Respect<FontAwesomeIcon icon={faChevronDown} className='icon'/></button>
            {isShown ? (
              <div class="collapse2 collapse">
              <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
              perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
              </div>
            ) : null}
          </div>
        
          <div className='layout__infos--divBtn'>
            <button className='bouton' type="button" onClick={handleClick}>Respect<FontAwesomeIcon icon={faChevronDown} className='icon'/></button>
            {isShown ? (
              <div class="collapse3 collapse">
              <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
                perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
              </div>
            ) : null}
          </div>
          <div className='layout__infos--divBtn'>
            <button className='bouton' type="button" onClick={handleClick}>Sécurité<FontAwesomeIcon icon={faChevronDown} className='icon'/></button>
            {isShown ? (
              <div class="collapse4 collapse">
              <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que   pour les voyageurs, chaque logement
                correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
                locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
                également des ateliers sur la sécurité domestique pour nos hôtes.</p>
              </div>
            ) : null}
          </div>
      </div>
   </div>
 )
      
      

     







   /* return (
      <div className='layout' style={apropos}>
        <img src={backgroundApropos} alt='img-background-a-propos' className='layout__img-background' />

        <div className='layout__infos'>

          <div className='layout__infos--divBtn'>
            <button className='bouton' type="button" data-toggle="collapse" href="#collapse1" onClick={()=> "collapse"}>Fiabilité<FontAwesomeIcon icon={faChevronDown} className='icon'/></button>
              <div class="collapse1 collapse">
              <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
              régulièrement vérifiées par nos équipes.</p>
              </div>
            </div>

            <div className='layout__infos--divBtn'>
            <button className='bouton' type="button" data-toggle="collapse" href="#collapse2">Respect<FontAwesomeIcon icon={faChevronDown} className='icon'/></button>
              <div class="collapse2 collapse">
              <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
              perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
              </div>
            </div>

            <div className='layout__infos--divBtn'>
            <button className='bouton'type="button" data-toggle="collapse" href="#collapse3">Service<FontAwesomeIcon icon={faChevronDown} className='icon'/></button>
            <div class="collapse3 collapse">
                <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
                perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </div>
            </div> 

            <div className='layout__infos--divBtn'>
            <button className='bouton'type="button" data-toggle="collapse" href="#collapse4">Sécurité<FontAwesomeIcon icon={faChevronDown} className='icon'/></button>
            <div class="collapse4 collapse">
                <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
                correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
                locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
                également des ateliers sur la sécurité domestique pour nos hôtes.</p>
            </div>
        </div>
        </div>
     </div>
    )*/
}
  export default Apropos