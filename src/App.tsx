import * as React from "react";
import Pages from "./pages/Pages";
import Header from "./components/Header";
import { routeNode } from "react-router5";

import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  app: {
    height: "100vh",
    color: "#000",
    background: "rgba(149,118,201,0.1)"
  }
});

const App = () => {
  return (
    <div className={css(styles.app)}>
      <Header />
      <Pages />
    </div>
  );
};

export default routeNode("")(App);
