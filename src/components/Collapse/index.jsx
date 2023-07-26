import React, { useState } from "react";
import "./Collapse.scss";
import "../../pages/Logement";
import "../../pages/Apropos";
import arrow_up from "../../assets/icons/arrow_up.png";


const Collapse = (props) => {
  const [open, setOPen] = useState(false);
  let classOpen = open ? "open" : "close";

  const toggle = () => {
    setOPen(!open);
  };

  return (
    <div className="buttonIcon">
      {/*On utilise les props pour afficher celui du label dans le fichier index.jsx logement(ou apropos).jsx*/}
      <button onClick={toggle}>
        {props.label}
        <img alt="icon-arrow-up" src={arrow_up} className={`arrow-up ${classOpen}`}></img>
        
      </button>
      {/*Ajout "classOpen pour animation*/}
      <div className={`content ${classOpen}`}>{props.children}</div>
    </div>
  );
};

export default Collapse;
