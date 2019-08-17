import React from "react";
import { Route } from "react-router-dom";
import CharacterList from "./CharacterList";
import LocationList from "./LocationsList";
import EpisodeList from "./EpisodeList";

export default function AppRouter() {
  return (
    <div>
      <Route path="/characters" component={CharacterList} />
      <Route path="/locations" component={LocationList} />
      <Route path="/episodes" component={EpisodeList} />
    </div>
  );
}
