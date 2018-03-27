import React from "react";
import { NavLink } from "react-router-dom";

const asRouterNavLink = AnyNavItem =>
  AnyNavItem.withComponent(({ active, ...rest }) => <NavLink {...rest} />);

export default asRouterNavLink;
