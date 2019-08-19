import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import SearchForm from "./SearchForm";
export default function LocationsList(props) {
  const [locations, setLocations] = useState();
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");
  useEffect(() => {
    const page = props.match.params.page;
    axios
      .get(`https://rickandmortyapi.com/api/location/?page=${page}`)
      .then(res => {
        setLocations(res.data.results);
        setNext(res.data.info.next);
        setPrev(res.data.info.prev);
      });
  }, [props.match.params.page]);

  return (
    <div>
      <SearchForm place="location" />
      <section className="location-list grid-view">
        {locations &&
          locations.map((loc, i) => <LocationCard location={loc} key={i} />)}
      </section>
      <footer>
        <NavLink to={prev && prev[prev.length - 1]}>
          <Icon name="backward" /> Back
        </NavLink>
        <NavLink to={next && next[next.length - 1]}>
          Next <Icon name="forward" />
        </NavLink>
      </footer>
    </div>
  );
}
