import axios from "axios";
import React, { useEffect, useState } from "react";
import BeerData from "./BeerData";
import Search from "./Search";

const BeersPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => setData(res?.data));
  }, []);

  return (
    <div className="beers-container">
      <Search setData={setData} />
      <BeerData data={data} />
    </div>
  );
};

export default BeersPage;
