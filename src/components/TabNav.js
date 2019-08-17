import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
export default function TabNav() {
  return (
    <div className="tab-container">
      <NavLink to="/characters" className="tablink">
        Characters
      </NavLink>
      <NavLink to="/locations" className="tablink">
        Locations
      </NavLink>
      <NavLink to="/episodes" className="tablink">
        Episodes
      </NavLink>
    </div>
  );
}
