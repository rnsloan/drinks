import * as React from "react";
import { Link } from "react-router5";
import { StyleSheet, css } from "aphrodite";
import { darkPurple, brightPurple } from "../utils/css";

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    width: "100%",
    background: `linear-gradient(to right, ${brightPurple} 0%, ${darkPurple} 100%)`,
    "@supports not (background: linear-gradient(to right, black 0%, black) 100%))": {
      background: darkPurple
    }
  },
  h1: {
    margin: 0,
    padding: 0
  },
  headingLink: {
    fontFamily: "'Monoton', cursive",
    fontSize: "40px",
    textDecoration: "none",
    color: "#fff",
    letterSpacing: "1px"
  }
});

const Header = () => (
  <div className={css(styles.header)}>
    <h1 className={css(styles.h1)}>
      <Link className={css(styles.headingLink)} routeName="home">
        Cocktails
      </Link>
    </h1>
  </div>
);

export default Header;
