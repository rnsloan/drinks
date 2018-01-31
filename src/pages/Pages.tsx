import * as React from "react";
import { withRoute } from "react-router5";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";
import DrinkPage from "./DrinkPage";
import SignInPage from "./SignInPage";

const NotFound = () => <p>Page Not Found</p>;

const components = {
  home: HomePage,
  search: SearchPage,
  drink: DrinkPage,
  signin: SignInPage
};

const Pages = props => {
  const { route } = props;
  const segment = route.name.split(".")[0];

  return React.createElement(components[segment] || NotFound);
};

export default withRoute(Pages);
