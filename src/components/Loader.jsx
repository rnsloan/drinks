import * as React from "react";
import { StyleSheet, css } from "aphrodite";
import { brightPurple } from "../utils/css";

const translateKeyframes = {
  "0%": {
    transform: "rotate(0deg)"
  },

  "50%": {
    transform: "rotate(180deg)"
  },

  "100%": {
    transform: "rotate(360deg)"
  }
};

export const wrapper = {
  display: "flex",
  justifyContent: "center"
};

const shared = {
  boxSizing: "border-box",
  width: "64px",
  height: "64px"
};

// source: http://github.danielcardoso.net/load-awesome/animations/ball-clip-rotate.html
const styles = StyleSheet.create({
  loader: {
    ...shared,
    display: "block",
    fontSize: "0",
    color: brightPurple
  },
  child: {
    ...shared,
    display: "inline-block",
    border: "4px solid currentColor",
    borderBottomColor: "transparent",
    borderRadius: "100%",
    animationName: translateKeyframes,
    animationDuration: "1s",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear"
  }
});

const Loader = () => {
  return (
    <div className={css(styles.loader)}>
      <div className={css(styles.child)} />
    </div>
  );
};

export default Loader;
