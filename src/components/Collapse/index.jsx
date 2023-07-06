//import React, { Component } from 'react'
import {useState} from 'react';
//import arrow_down from '../../assets/icons/arrow_down.png';
import arrow_up from '../../assets/icons/arrow_up.png';
import './Collapse.scss'
import '../../pages/Logement'
import '../../pages/Apropos'


const Collapse = (props) => {
    const [open, setOPen] = useState(false);

   // const contentRef = useRef();
    //if(contentRef.current) console.log(contentRef.current)
    const toggle = () => {
    setOPen(!open) 
  };

  return (
    <div className='buttonIcon'>
        {/*On utilise les props pour afficher celui du label dans logement(ou apropos).jsx*/}
      <button onClick={toggle}>{props.label}<img src={arrow_up} alt="icon_arrow-up" className='arrow_up'/></button>
      {open && (
        <div className="content">{props.children}
        </div>
      )}
    </div>
  );
  };

export default Collapse




   