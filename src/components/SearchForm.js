import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SearchForm({ place }) {
  // TODO: Add stateful logic for query/form data
  const [name, setName] = useState("");
  const [apiCall, setApiCall] = useState("");

  const onSearch = (e, name, setApiCall) => {
    e.preventDefault();
    setApiCall(`https://rickandmortyapi.com/api/${place}/?name=${name}`);
  };

  useEffect(() => {
    apiCall !== "" &&
      axios
        .get(apiCall)
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err));
  }, [apiCall]);

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
