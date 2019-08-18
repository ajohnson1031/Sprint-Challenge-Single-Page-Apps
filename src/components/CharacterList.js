import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { NavLink } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import SearchForm from "./SearchForm";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState();
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");

  useEffect(() => {
    const page = props.match.params.page;
    axios
      .get(`https://rick-api.herokuapp.com/api/character/?page=${page}`)
      .then(res => {
        setCharacters(res.data.results);
        setNext(res.data.info.next);
        setPrev(res.data.info.prev);
      })
      .catch(err => console.log(err));
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [props.match.params.page]);

  return (
    <div>
      <SearchForm place="character" />
      <section className="character-list grid-view">
        {characters &&
          characters.map((c, i) => <CharacterCard char={c} key={i} />)}
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
