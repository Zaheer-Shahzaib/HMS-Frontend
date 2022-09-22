import React from "react";

import { useState } from "react";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";


const createLinks = (routes) => {
    const [collapseOpen, setCollapseOpen] = useState();
    // verifies if routeName is the one active (in browser input)
    const activeRoute = (routeName) => {
      return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    };
    // toggles collapse between opened and closed (true/false)
    const toggleCollapse = () => {
      setCollapseOpen((data) => !data);
    };
    // closes the collapse
    const closeCollapse = () => {
      setCollapseOpen(false);
    };
    return routes.map((prop, key) => {
      return (
        <NavItem key={key}>
          <NavLink
            to={prop.layout + prop.path}
            tag={NavLinkRRD}
            onClick={closeCollapse}
            activeClassName="active"
          >
            <i className={prop.icon} />
            {prop.name}
          </NavLink>
        </NavItem>
      );
    });
  };
  export default createLinks