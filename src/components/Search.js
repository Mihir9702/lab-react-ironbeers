import axios from "axios";
import React, { useEffect, useState } from "react";

const Search = ({ setData }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`)
      .then((res) => setData(res.data));
  }, [search, setData]);

  return (
    <div className="search">
      <input
        value={search}
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
