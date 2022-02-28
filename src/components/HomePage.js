import React from "react";
import { Link } from "react-router-dom";
import beer from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";

const HomePage = () => {
  return (
    <div className="nav">
      <div>
        <img src={beer} alt="beer" />
        <Link to="/beers">All Beers</Link>
      </div>
      <div>
        <img src={randomBeer} alt="randomBeer" />
        <Link to="/random-beer">Random Beer</Link>
      </div>
      <div>
        <img src={beer} alt="randomBeer" />
        <Link to="/new-beer">New Beer</Link>
      </div>
    </div>
  );
};

export default HomePage;
