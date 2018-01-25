import * as React from "react";
import { routeNode } from "react-router5";
import Pages from "./pages/Pages";
import Header from "./components/Header";
import "./utils/css";

import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  pages: {
    padding: "10px"
  }
});

const App = () => {
  return (
    <div>
      <Header />
      <div className={css(styles.pages)}>
        <Pages />
      </div>
    </div>
  );
};

export default routeNode("")(App);
