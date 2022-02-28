import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BeersPage = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => setData(res?.data));
  }, []);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`)
      .then((res) => setData(res.data));
  }, [search]);

  return (
    <div className="beers-container">
      <div className="search">
        <input
          value={search}
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {data &&
        data.map((beer) => {
          return (
            <div className="beer-container" key={beer._idj}>
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
    </div>
  );
};

export default BeersPage;
