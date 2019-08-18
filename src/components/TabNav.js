import React from "react";
// import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
export default function TabNav() {
  return (
    <div className="tab-container">
      <NavLink exact to="/" className="tablink">
        Home
      </NavLink>
      <NavLink to="/characters/1" className="tablink">
        Characters
      </NavLink>
      <NavLink to="/locations/1" className="tablink">
        Locations
      </NavLink>
      <NavLink to="/episodes/1" className="tablink">
        Episodes
      </NavLink>
    </div>
  );
}
