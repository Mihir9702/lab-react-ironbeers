import axios from "axios";
import React, { useEffect, useState } from "react";
import Beer from "./Beer";

const RandomBeer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((res) => setData(res?.data));
  }, []);

  console.log(data);
  return <Beer data={data} />;
};

export default RandomBeer;
