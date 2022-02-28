import axios from "axios";
import React, { useState } from "react";

const NewBeer = () => {
  const [name, setName] = useState("");
  const [tagline, setTagLine] = useState("");
  const [desc, setDesc] = useState("");
  const [first_brewed, setFB] = useState("");
  const [brewers_tips, setBT] = useState("");
  const [attenuation_level, setAL] = useState(0);
  const [contributed_by, setCB] = useState("");

  const addBeer = () => {
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", {
        name: name,
        tagline: tagline,
        description: desc,
        first_brewed: first_brewed,
        brewers_tips: brewers_tips,
        attenuation_level: attenuation_level,
        contributed_by: contributed_by,
      })
      .then((res) => console.log(res));
  };

  return (
    <form onSubmit={addBeer}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={tagline}
        onChange={(e) => setTagLine(e.target.value)}
      />
      <input
        type="text"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <input
        type="text"
        value={first_brewed}
        onChange={(e) => setFB(e.target.value)}
      />
      <input
        type="text"
        value={brewers_tips}
        onChange={(e) => setBT(e.target.value)}
      />
      <input
        type="number"
        value={attenuation_level}
        onChange={(e) => setAL(e.target.value)}
      />
      <input
        type="text"
        value={contributed_by}
        onChange={(e) => setCB(e.target.value)}
      />
      <button type="submit">Add New</button>
    </form>
  );
};

export default NewBeer;
