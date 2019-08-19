import React, { useEffect, useState } from "react";
import EpisodeCard from "./EpisodeCard";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import SearchForm from "./SearchForm";

export default function EpisodeList(props) {
  const [episodes, setEpisodes] = useState();
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");
  useEffect(() => {
    const page = props.match.params.page;
    axios
      .get(`https://rickandmortyapi.com/api/episode/?page=${page}`)
      .then(res => {
        setEpisodes(res.data.results);
        setNext(res.data.info.next);
        setPrev(res.data.info.prev);
      })
      .catch(err => console.log(err));
  }, [props.match.params.page]);

  return (
    <div>
      <SearchForm
        place="episode"
        setEpisodes={setEpisodes}
        setNext={setNext}
        setPrev={setPrev}
      />
      <section className="location-list grid-view">
        {episodes &&
          episodes.map((episode, i) => <EpisodeCard ep={episode} key={i} />)}
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
