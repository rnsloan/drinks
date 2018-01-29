import * as React from "react";
import { BaseLink } from "react-router5";
import { StyleSheet, css } from "aphrodite/no-important";
import { darkPurple, brightPurple } from "../utils/css";
const logo = require("../assets/cocktail.svg") as string;

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    width: "100%",
    marginBottom: "20px",
    background: `linear-gradient(to right, ${brightPurple} 0%, ${darkPurple} 100%)`,
    "@supports not (background: linear-gradient(to right, black 0%, black) 100%))": {
      background: darkPurple
    }
  },
  h1: {
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  headingLink: {
    fontFamily: "'Monoton', cursive",
    fontSize: "40px",
    textDecoration: "none",
    color: "#fff",
    letterSpacing: "1px"
  },
  image: {
    width: "50px",
    height: "auto",
    marginLeft: "10px"
  }
});

const Header = () => (
  <div className={css(styles.header)}>
    <h1 className={css(styles.h1)}>
      <Link className={css(styles.headingLink)} routeName="home">
        Drinks
      </Link>
      <img src={logo} alt="cocktail" className={css(styles.image)} />
    </h1>
  </div>
);

export default Header;
