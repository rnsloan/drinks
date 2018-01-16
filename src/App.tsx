import * as React from "react";
import Pages from "./pages/Pages";
import Header from "./components/Header";
import { routeNode } from "react-router5";

const App = () => {
  return (
    <div>
      <Header />
      <Pages />
    </div>
  );
};

export default routeNode("")(App);
