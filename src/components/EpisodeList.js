import React, { useEffect, useState } from "react";
import EpisodeCard from "./EpisodeCard";
import axios from "axios";

export default function EpisodeList() {
  const [episodes, setEpisodes] = useState();
  const [next, setNext] = useState();
  const [prev, setPrev] = useState();
  useEffect(() => {
    axios
      .get("https://rick-api.herokuapp.com/api/episode")
      .then(res => {
        setEpisodes(res.data.results);
        setNext(res.data.info.next);
        setPrev(res.data.info.prev);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <section className="location-list grid-view">
      {episodes &&
        episodes.map((episode, i) => <EpisodeCard ep={episode} key={i} />)}
    </section>
  );
}
