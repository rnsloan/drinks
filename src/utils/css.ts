import { StyleSheet } from "aphrodite/no-important";

// https://github.com/Khan/aphrodite/issues/139#issuecomment-266500624
const GLOBALS = "__GLOBAL_STYLES__";

const globalExtension = {
  selectorHandler: (selector, baseSelector, generateSubtreeStyles) =>
    baseSelector.includes(GLOBALS) ? generateSubtreeStyles(selector) : null
};

const extended = StyleSheet.extend([globalExtension]);

const globalStyles = extended.StyleSheet.create({
  [GLOBALS]: {
    body: {
      background: "rgba(149,118,201,0.1)",
      fontFamily: "Open Sans,Segoe UI,sans-serif",
      webkitFontSmoothing: "antialiased",
      textRendering: "optimizeLegibility"
    },
    "*": {},
    "p, h1, h2, h3, h4, h5, h6, ul, dl, dt, dd": {},
    a: { color: "#333" }
  }
});

export default extended.css(globalStyles[GLOBALS]);

export const brightPurple = "rgba(224,84,209,0.8)";
export const darkPurple = "rgba(149,118,201,0.8)";
export const styles = StyleSheet.create({
  hidden: {
    border: "0",
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: "0",
    position: "absolute",
    width: "1px"
  }
});
