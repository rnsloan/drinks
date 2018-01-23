import * as React from "react";
import { Link } from "react-router5";

const Header = () => (
  <h1>
    <Link routeName="home">Cocktails</Link>
  </h1>
);

export default Header;
