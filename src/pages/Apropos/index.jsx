import React from "react";
import backgroundApropos from "../../assets/backgroundApropos.png";
import apropos from "./apropos.scss";
import Collapse from "../../components/Collapse";


function Apropos (){

    return (
      <section className="layout" style={apropos}>
        <img
          src={backgroundApropos}
          alt="img-background-a-propos"
          className="layout__img-background"
        />

        <div className="layout__infos">
          <div className="collapse">
            <Collapse label="Fiabilité">
              <p>
                Les annonces postées sur Kasa garantissent une fiabilité totale.
                Les photos sont conformes aux logements, et toutes les
                informations sont régulièrement vérifiées par nos équipes.
              </p>
            </Collapse>
          </div>
          <div className="collapse">
            <Collapse label="Respect">
              <p>
                La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de perturbation du
                voisinage entraînera une exclusion de notre plateforme.
              </p>
            </Collapse>
          </div>
          <div className="collapse">
            <Collapse label="Service">
              <p>
                La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de perturbation du
                voisinage entraînera une exclusion de notre plateforme.
              </p>
            </Collapse>
          </div>
          <div className="collapse">
            <Collapse label="Sécurité">
              <p>
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
                que pour les voyageurs, chaque logement correspond aux critères
                de sécurité établis par nos services. En laissant une note aussi
                bien à l'hôte qu'au locataire, cela permet à nos équipes de
                vérifier que les standards sont bien respectés. Nous organisons
                également des ateliers sur la sécurité domestique pour nos
                hôtes.
              </p>
            </Collapse>
          </div>
        </div>
      </section>
    );
  }


export default Apropos;
