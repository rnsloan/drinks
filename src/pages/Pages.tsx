import * as React from "react";
import { withRoute } from "react-router5";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";
import CocktailPage from "./CocktailPage";

const NotFound = () => <div>NotFound</div>;

const components = {
  home: HomePage,
  search: SearchPage,
  cocktail: CocktailPage
};

const Pages = props => {
  const { route } = props;
  const segment = route.name.split(".")[0];

  return React.createElement(components[segment] || NotFound);
};

export default withRoute(Pages);
