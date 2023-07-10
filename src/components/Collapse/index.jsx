//import React, { Component } from 'react'
import { useState } from "react";
//import arrow_down from '../../assets/icons/arrow_down.png';
import arrow_down from "../../assets/icons/arrow_down.png";
import "./Collapse.scss";
import Fade from "../Fade";
import "../../pages/Logement";
import "../../pages/Apropos";

const Collapse = (props) => {
  const [open, setOPen] = useState(false);

  // const contentRef = useRef();
  //if(contentRef.current) console.log(contentRef.current)
  const toggle = () => {
    setOPen(!open);
  };

  return (
    <div className="buttonIcon">
      {/*On utilise les props pour afficher celui du label dans le fichier index.jsx logement(ou apropos).jsx*/}
      <button onClick={toggle}>
        {props.label}
        <img src={arrow_down} alt="icon_arrow-down" className="arrow_up" />
      </button>
      {open && (
        <Fade visible={open}>
          <div className="content">{props.children}</div>
        </Fade>
      )}
    </div>
  );
};

export default Collapse;
