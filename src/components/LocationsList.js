import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import axios from "axios";

export default function LocationsList() {
  const [locations, setLocations] = useState();
  const [next, setNext] = useState();
  const [prev, setPrev] = useState();
  useEffect(() => {
    axios.get("https://rick-api.herokuapp.com/api/location").then(res => {
      setLocations(res.data.results);
      setNext(res.data.info.next);
      setPrev(res.data.info.prev);
    });
  }, []);

  return (
    <section className="location-list grid-view">
      {locations &&
        locations.map((loc, i) => <LocationCard location={loc} key={i} />)}
    </section>
  );
}
