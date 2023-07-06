//import { Link } from 'react-router'
import React, { Component } from 'react';
import backgroundApropos from '../../assets/backgroundApropos.png';
import apropos from './apropos.scss';
import Collapse from '../../components/Collapse';


//library.add(faChevronDown, faChevronUp)

//import {useState} from 'react';

 /*function Apropos() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    //visibility
    setIsShown(current => !current);
    
  };*/

  class Apropos extends Component{
    state = {
      isActive: false
    };
  
    handleShow = () => {
      this.setState({isActive: true});
    };
  
    handleHide = () => {
      this.setState({isActive: false});
    };
    render(){
  return (
    
    <section className='layout' style={apropos}>

        <img src={backgroundApropos} alt='img-background-a-propos' className='layout__img-background' />

        <div className='layout__infos'>
          <div className='collapse'>
            <Collapse label="Fiabilité">
              <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
              régulièrement vérifiées par nos équipes.</p>
            </Collapse>
          </div>
          <div className='collapse'>
            <Collapse label="Respect">
              <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
              perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </Collapse>
          </div>
          <div className='collapse'>
            <Collapse label="Service">
            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
              perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </Collapse>
          </div>
          <div className='collapse'>
            <Collapse label="Sécurité">
              <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
              correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
              locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
              également des ateliers sur la sécurité domestique pour nos hôtes.</p>
            </Collapse>
          </div>
          {/*<div className='layout__infos--divBtn'>
          {this.state.isActive && <button className='bouton' type="button" onClick={this.handleHide}>Fiabilité<img src={arrow_up} alt="icon_arrow-up" className='arrow_up'/></button>}
            {this.state.isActive ? (
              <Collapse1/>
            ) : <button className='bouton' type="button" onClick={this.handleShow}>Fiabilité<img src={arrow_down} alt="icon_arrow-down" className='arrow_down'/></button>}
          </div>
        

          <div className='layout__infos--divBtn'>
          {this.state.isActive && <button className='bouton' type="button" onClick={this.handleHide}>Respect<img src={arrow_up} alt="icon_arrow-up" className='arrow_up'/></button>}
            {this.state.isActive ? (
            <Collapse2/>
            ) : <button className='bouton' type="button" onClick={this.handleShow}>Respect<img src={arrow_down} alt="icon_arrow-down" className='arrow_down'/></button>}
          </div>
        
          <div className='layout__infos--divBtn'>
          {this.state.isActive && <button className='bouton' type="button" onClick={this.handleHide}>Service<img src={arrow_up} alt="icon_arrow-up" className='arrow_up'/></button>}
            {this.state.isActive ? (
              <Collapse3/>
            ) : <button className='bouton' type="button" onClick={this.handleShow}>Service<img src={arrow_down} alt="icon_arrow-down" className='arrow_down'/></button>}
          </div>
          <div className='layout__infos--divBtn'>
          {this.state.isActive && <button className='bouton' type="button" onClick={this.handleHide}>Sécurité<img src={arrow_up} alt="icon_arrow-up" className='arrow_up'/></button>}
            {this.state.isActive ? (
              <Collapse4/>
            ) : <button className='bouton' type="button" onClick={this.handleShow}>Service<img src={arrow_down} alt="icon_arrow-down" className='arrow_down'/></button>}
            </div>*/}
      </div>
   </section>
 )
      
}   
}

  export default Apropos
     







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
