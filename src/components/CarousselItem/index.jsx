import React from "react";

//Rendra l'élément lui-même. On passe juste la propriété width au composant pour l'instant
export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

export default CarouselItem;