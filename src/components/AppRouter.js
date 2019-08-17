import React from "react";
import { Route } from "react-router-dom";
import CharacterList from "./CharacterList";
import LocationList from "./LocationsList";
import EpisodeList from "./EpisodeList";

export default function AppRouter() {
  return (
    <div>
      <Route
        path="/characters/:page"
        render={props => <CharacterList {...props} />}
      />
      <Route
        path="/locations/:page"
        render={props => <LocationList {...props} />}
      />
      <Route
        path="/episodes/:page"
        render={props => <EpisodeList {...props} />}
      />
    </div>
  );
}
