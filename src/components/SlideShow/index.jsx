import React, { useState, useEffect } from "react";
import "./slideShow.scss";
import arrow_forward from "../../assets/icons/arrow_forward.png";
import arrow_back from "../../assets/icons/arrow_back.png";

//will render the item itself. We just need to pass the width property to this component for now
export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

//Const Carousel
export const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  /*On implémente pour mettre à jour l'index et controler le carousel. Vérifie si activeIndex est le premier ou dernier item pour ensuite afficher l'image préc ou suiv au clic du bouton.*/
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }
    setActiveIndex(newIndex);
  };

  //Diaporama slider
  useEffect(() => {
    let slider = setInterval(() => {
        setActiveIndex(activeIndex + 1);
    }, 4000);
    return () => clearInterval(slider);
  }, [activeIndex]);

  return (
    <div className="carousel">
      {/*control the active item by using the transform: translateX for the Div.Inner*/}
      <div
        className="inner"
        //transition de l'image à l'horizontale
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { widht: "100%" });
        })}
      </div>
      {/*Implémenter prev et next button */}
      <div className="indicators">
        <div className="btnIconBack">
          <button
            className="btnBack"
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
          >
            <img src={arrow_back} alt="icon-back icon" className="icon" />
          </button>
        </div>
        <div className="btnIconForward"></div>
        <button
          className="btnForward"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <img src={arrow_forward} alt="icon-forward icon" className="icon" />
        </button>
      </div>
    </div>
  );
};
