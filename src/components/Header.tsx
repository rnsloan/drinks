import * as React from "react";
import { Link } from "react-router5";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    width: "100%",
    background:
      "linear-gradient(to right, rgba(224,84,209,0.8) 0%,rgba(149,118,201,0.8) 100%)",
    "@supports not (background: linear-gradient(to right, rgba(224,84,209,0.8) 0%,rgba(149,118,201,0.8) 100%))": {
      background: "#9576c9"
    }
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
    <h1>
      <Link className={css(styles.headingLink)} routeName="home">
        Cocktails
      </Link>
    </h1>
  </div>
);

export default Header;
