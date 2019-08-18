import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SearchForm() {
  // TODO: Add stateful logic for query/form data
  const [name, setName] = useState("");
  const currURL = window.location.href;
  const [apiCall, setApiCall] = useState("");
  const [place, setPlace] = useState();

  const onSearch = (e, name, setApiCall) => {
    e.preventDefault();

    if (currURL.includes("characters"))
      setApiCall(`https://rickandmortyapi.com/api/character/?name=${name}`);
    else if (currURL.includes("locations"))
      setApiCall(`https://rickandmortyapi.com/api/location/?name=${name}`);
    else if (currURL.includes("episodes"))
      setApiCall(`https://rickandmortyapi.com/api/episode/?name=${name}`);
  };

  useEffect(() => {
    apiCall !== "" && axios.get(apiCall).then(res => console.log(res));
  }, [apiCall]);

  useEffect(() => {
    currURL.includes("characters")
      ? setPlace("character")
      : currURL.includes("locations")
      ? setPlace("location")
      : setPlace("episode");
  }, [place]);

  const handleInputChange = e => {
    setName(e.target.value);
  };

  return (
    <section className="search-form">
      <form onSubmit={event => onSearch(event, name, setApiCall)}>
        <input
          onChange={event => handleInputChange(event)}
          placeholder={`Search ${place} name...`}
          value={name}
          name="name"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}
