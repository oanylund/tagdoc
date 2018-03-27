import React from "react";
import { Navbar, NavItem } from "tagdoc-ui-components";
import asRouterNavLink from "../hoc/asRouterNavLink";

const RouterNavItem = asRouterNavLink(NavItem);

const Header = () => {
  return (
    <Navbar>
      <RouterNavItem to="/tagdoc">TagDoc</RouterNavItem>
      <RouterNavItem to="/partials">Partials</RouterNavItem>
      <RouterNavItem to="/playground">Playground</RouterNavItem>
      <RouterNavItem to="/export">Export</RouterNavItem>
    </Navbar>
  );
};

export default Header;
