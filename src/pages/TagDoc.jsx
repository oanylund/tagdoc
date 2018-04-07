import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { SubNavbar, SubNavItem } from "tagdoc-ui-components";
import TagDocCreate from "./TagDoc_Create";

import asRouterNavLink from "../hoc/asRouterNavLink";

const RouterSubNavItem = asRouterNavLink(SubNavItem);

const Connect = () => <p>connect</p>;

class TagDoc extends Component {
  renderSubNav() {
    return (
      <SubNavbar key={1}>
        <RouterSubNavItem to="/tagdoc/create">Create</RouterSubNavItem>
        <RouterSubNavItem to="/tagdoc/connect">Connect</RouterSubNavItem>
      </SubNavbar>
    );
  }
  render() {
    return [
      this.renderSubNav(),
      <Switch key={2}>
        <Route path="/tagdoc/create" component={TagDocCreate} />
        <Route path="/tagdoc/connect" component={Connect} />
        <Redirect to="/tagdoc/create" from="/tagdoc" exact />
      </Switch>
    ];
  }
}

export default TagDoc;
