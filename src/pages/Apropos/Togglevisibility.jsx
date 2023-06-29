import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';

export default function ToggleVisibility({ children }) {

  // React state to manage visibility
  const [show, setShow] = useState();

  // function to toggle the boolean value
  function toggleShow() {
    setShow(!show);
  }
  var buttonText = show ? <FontAwesomeIcon icon={faChevronDown} className='icon'/> : "Show Component";

  return (
    <div className="component-container">
      {show && children}
      <button onClick={toggleShow}>{buttonText}</button>
    </div>
  );
}