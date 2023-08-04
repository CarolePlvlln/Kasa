import React, { useState, useEffect } from "react";
import "./slideShow.scss";
import arrow_forward from "../../assets/icons/arrow_forward.png";
import arrow_back from "../../assets/icons/arrow_back.png";

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
   
  /*On implémente pour mettre à jour l'index et controler le carousel. Vérifie si activeIndex est le premier ou dernier item pour ensuite afficher l'image préc ou suiv au clic du bouton.*/  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      console.log(React.Children.count(children))
      newIndex = React.Children.count(children) - 1;
    } 
    setActiveIndex(newIndex);
  };


  //Diaporama slider (timer). Utilisation du hook "useEffect" qui sera appelé au premier affichage et chaque mise à jour..
  useEffect(() => {
    let timer = setInterval(() => {
      clearInterval();
      //loop
      setActiveIndex((activeIndex)=>(activeIndex + 1)% children.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [activeIndex]);
  

  return (
    <div className="carousel">
      {/*controle l'item active en utilisant transform: translateX pour Div.Inner*/}
      <div
        className="inner"
        //transition de l'image à l'horizontale
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child);
        })}
      </div>
      {/*Implémenter prev et next button. Ajout class indicatorsInactive si une seule image*/}
      <div className={`indicators${(children.length===1) ? 'Inactive':''}`}>
        <div className="btnIconBack">
          <button
            className="btnBack"
            onClick={() => {
              setActiveIndex((activeIndex - 1)<0 ? children.length-1 : activeIndex-1);
            }}
          >
            <img src={arrow_back} alt="icon-back icon" className="icon" />
          </button>
        </div>
        <div className="btnIconForward"></div>
        <button
          className="btnForward"
          onClick={() => {
            setActiveIndex((activeIndex + 1)>=children.length ? 0 : activeIndex+1);
          }}
        >
          <img src={arrow_forward} alt="icon-forward icon" className="icon" />
        </button>
        
      </div>
      <div className={`imageIndex${(children.length===1) ? 'Inactive':''}`}>
      <h5>{activeIndex+1}/{children.length}</h5>
      </div>
    </div>
  );
};

export default Carousel;
