//import React, { Component } from 'react'
import {useState} from 'react';

 function Collapse1() {
  const fiabiliteShown = useState(true);
  
  return (
              <div class="collapse1" visible={fiabiliteShown}>
              <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
              régulièrement vérifiées par nos équipes.</p>
              </div> 

 )  
}   

function Collapse2() {
    const respectShown = useState(true);
  
    return (
        <div class="collapse1 collapse" visible={respectShown}>
        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
        perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </div> 
)  
}   

function Collapse3() {
    const securiteShown = useState(true);
  
    return (
        <div class="collapse1 collapse" visible={securiteShown}>
        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
        perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </div> 
)  
}   

function Collapse4() {
    const serviceShown = useState(true);
  
    return (
        <div class="collapse1 collapse" visible={serviceShown}>
        <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
        correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
        locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
        également des ateliers sur la sécurité domestique pour nos hôtes.</p>
        </div> 
)  
}   

export {Collapse1, Collapse2, Collapse3, Collapse4}




   