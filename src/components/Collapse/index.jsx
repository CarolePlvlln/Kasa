import React, { useState } from "react";
import arrow_down from "../../assets/icons/arrow_down.png";
import "./Collapse.scss";
import "../../pages/Logement";
import "../../pages/Apropos";

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
        <i className={`fa-solid fa-chevron-up arrow-up ${classOpen}`}></i>
        
      </button>
      {/*Ajout "classOpen pour animation*/}
      <div className={`content ${classOpen}`}>{props.children}</div>
    </div>
  );
};

export default Collapse;
