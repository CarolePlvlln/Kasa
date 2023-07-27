import React from "react";
import logement from "./logement.scss";
import Carousel from "../../components/SlideShow";
import CarouselItem  from "../../components/CarousselItem";
import star_active from "../../assets/icons/star-active.png";
import star_inactive from "../../assets/icons/star-inactive.png";
//The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>. Child routes inherit all params from their parent routes.
import { useParams, Navigate } from "react-router-dom";
import logementsList from "../../data/logementsList.json";
import Collapse from "../../components/Collapse";

function Logement() {
  //récupère ce qu'il y a dans url
  const params = useParams();
  //Déclarer variable logementFiltre
let logementFiltre;

//boucle for pour parcourir logement et comparer ID
for (let i = 0; i < logementsList.length; i++) {
  if (logementsList[i].id === params.id) {
    //logementFiltre=logement avec id=
    logementFiltre = logementsList[i];
  }
//Pas de logement trouvé
}
    if(!logementFiltre) {
      return <Navigate to="/notFound" />;
  }
  

const stars= [];
for (let i = 0; i< logementFiltre.rating; i++){
  stars.push(<img src={star_active} key={'starActive-'+i} alt="icon_star_coral" className="star iconStarCoral"
/>)
}
for (let i = 0; i< 5-logementFiltre.rating; i++){
  stars.push(<img src={star_inactive} key={'starInactive-'+i} alt="icon_star_grey" className="star iconStargrey"
/>)
}

  return (
    <section className="layout" style={logement}>
      <div className="slideShow">
        <Carousel>
          {logementFiltre.pictures.map((picture) => {
            return (
              <CarouselItem key={picture}>
                <img src={picture} alt="photos carousel" className="picture" />
              </CarouselItem>
            );
          })}
        </Carousel>
      </div>
      <article className="logement">
        <div className="logement__titreEtAgent">
          <div className="TitreEtAgent">
            <div className="titreLocalisation">
              <h2>{logementFiltre.title}</h2>
              <h3>{logementFiltre.location}</h3>
            </div>
            <div className="tags">
              {/*parcourir tag de logementFiltre. Retourne chaque tag dans un bouton*/}
              {logementFiltre.tags.map((tag) => {
                return <button key={tag}>{tag}</button>;
              })}
            </div>
          </div>
          <div className="agentRating">
            <div className="agent">
              <h3>{logementFiltre.host.name}</h3>
              <img
                src={logementFiltre.host.picture}
                alt="portrait-agent"
                className="imgAgent"
              />
            </div>
            <div className="rating">
              {/*Tableau pour afficher le nombre d'étoile en icônes étoiles corail */}
              {stars}
            </div>
          </div>
        </div>
        <div className="descriptionEquipements">
          <div className="btnScroll">
            <div className="collapse">
              <Collapse label="Description">
                <p>{logementFiltre.description}</p>
              </Collapse>
            </div>
            <div className="collapse">
              <Collapse label="Equipements">
                <p>{logementFiltre.equipments}</p>
              </Collapse>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Logement;
