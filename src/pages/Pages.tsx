import * as React from "react";
import { withRoute } from "react-router5";
import Home from "./Home";
import Search from "./Search";
import Cocktail from "./Cocktail";

const NotFound = () => <div>NotFound</div>;

const components = {
  home: Home,
  search: Search,
  cocktail: Cocktail
};

const Pages = props => {
  const { route } = props;
  const segment = route.name.split(".")[0];

  return React.createElement(components[segment] || NotFound);
};

export default withRoute(Pages);
