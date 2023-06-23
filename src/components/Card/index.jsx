import React from 'react'

function Card({ img, title }) {
    return (
      <div>
        <img src={img} alt="logement" />
        <h1>{title}</h1>
      </div>
    )}

    
export default Card