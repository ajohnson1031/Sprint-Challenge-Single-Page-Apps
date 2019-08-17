import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState();
  const [next, setNext] = useState();
  const [prev, setPrev] = useState();

  useEffect(() => {
    axios
      .get("https://rick-api.herokuapp.com/api/character")
      .then(res => {
        console.log(res);
        setCharacters(res.data.results);
        setNext(res.info.next);
        setPrev(res.info.prev);
      })
      .catch(err => console.log(err));
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list grid-view">
      {characters &&
        characters.map((c, i) => <CharacterCard char={c} key={i} />)}
    </section>
  );
}
