import React from "react";
import { Link } from "react-router-dom";

const BeerData = ({ data }) => {
  return (
    <>
      {data &&
        data.map((beer) => {
          return (
            <div className="beer-container" key={beer._id}>
              <img src={beer.image_url} alt="Beer" />
              <div className="beer-information">
                <h2>
                  <Link to={`/beers/${beer._id}`} className="beer-link">
                    {beer.name}
                  </Link>
                </h2>
                <h3>{beer.tagline}</h3>
                <h3>Created By: {beer.contributed_by}</h3>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default BeerData;
