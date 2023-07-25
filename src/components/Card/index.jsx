import React from "react";
import PropTypes from "prop-types";
import card from "./card.scss";
import { useNavigate } from "react-router-dom";

/*useNavigation: hook qui donne accès à l'objet de navigation. Utile lorsqu'on' ne peut pas passer directement la prop de navigation dans le composant ou qu'on'ne veut pas le passer dans le cas d'un enfant profondément imbriqué.
useNavigation() renvoie la prop de navigation de l'écran dans lequel il se trouve.*/

function Card({ id, title, cover }) {
  const navigate = useNavigate();
  /*if(some condition) {
    navigate("/*")
}*/
 
  return (
    <div style={card} className="logements">
      <p>{title}</p>
      <div className="img-gradient"></div>
      <img
        src={cover}
        alt=""
        onClick={(e) => {
          navigate(`/Logement/${id}`);
        }}
      />
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  cover: PropTypes.string,
};

export default Card;
