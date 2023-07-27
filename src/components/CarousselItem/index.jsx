import React from "react";

//Rendra l'élément lui-même. On passe juste la propriété width au composant pour l'instant
export const CarouselItem = ({ children}) => {
  return (
    <div className="carousel-item" >
      {children}
    </div>
  );
};

export default CarouselItem;