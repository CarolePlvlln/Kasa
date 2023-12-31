import React from "react";
import backgroundHome from "../../assets/backgroundHome.png";
import logementsList from "../../data/logementsList.json";
import home from "./home.scss";
import Card from "../../components/Card";

function Home() {
  return (
    <div className="homeLayout" style={home}>
      <div className="img_titre">
      <img
        src={backgroundHome}
        alt="img-background-home"
        className="homeLayout__img"
      />
      <h1>Chez vous, <span>partout et ailleurs</span></h1>
    </div>
      <div className="homeLayout__logements">
        {logementsList.map(({ id, title, cover }) => (
          <Card id={id} key={id} title={title} cover={cover} />
        ))}
      </div>
    </div>
  );
}

export default Home;
