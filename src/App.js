import React from "react";
// import TabNav from "./components/TabNav.js";
// import Header from "./components/Header.js";
// import AppRouter from "./components/AppRouter.js";
import CharacterList from "./components/CharacterList";
import LocationList from "./components/LocationsList";
import "semantic-ui-css/semantic.min.css";

export default function App() {
  return (
    <main>
      {/* <Header />
      <TabNav />
      <AppRouter /> */}
      <LocationList />
    </main>
  );
}
