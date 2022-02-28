import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Beer from "./Beer";

const BeerPage = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((res) => setData(res.data));
  }, [id]);
  console.log(data);

  return <Beer data={data} />;
};

export default BeerPage;
