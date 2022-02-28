import React from "react";

const Beer = ({ data }) => {
  return (
    <div className="beer-container">
      <img src={data.image_url} alt="beer" />
      <div className="single-beer-information">
        <h1>{data.name}</h1>
        <h1>{data.tagline}</h1>
        <h1>{`First Brewed: ${data.first_brewed}`}</h1>
        <h2>{`Attenuation Level: ${data.attenuation_level}`}</h2>
        <h2>{data.description}</h2>
      </div>
    </div>
  );
};

export default Beer;
