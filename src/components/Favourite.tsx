import * as React from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { withRoute } from "react-router5";
import { Router } from "router5";
import { StyleSheet, css } from "aphrodite/no-important";
import { styles as extraStyles } from "../utils/css";

const styles = StyleSheet.create({
  button: {
    ":hover": {
      cursor: "pointer"
    },
    background: "none",
    border: "none",
    transform: "scale(0.8)",
    transformOrigin: "0 0",
    position: "relative",
    top: "11px",
    left: "4px"
  },
  svgPath: {
    fillOpacity: "1"
  }
});

interface State {
  isFavourite: boolean;
}

interface Props {
  router: Router;
  drinkId: string;
}

class Favourite extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      isFavourite: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        firebase
          .database()
          .ref(`users/${firebase.auth().currentUser.uid}`)
          .once("value")
          .then(snapshot => {
            if (snapshot.val()[this.props.drinkId]) {
              this.setState({
                isFavourite: true
              });
            }
          });
      }
    });
  }

  handleClick(ev: React.MouseEvent<HTMLButtonElement>) {
    ev.preventDefault();
    if (!firebase.auth().currentUser) {
      this.props.router.navigate("signin");
    } else {
      firebase
        .database()
        .ref(`users/${firebase.auth().currentUser.uid}`)
        .set({
          [this.props.drinkId]: !this.state.isFavourite
        })
        .then(() => {
          this.setState({
            isFavourite: !this.state.isFavourite
          });
        });
    }
  }

  render() {
    return (
      <button onClick={this.handleClick} className={css(styles.button)}>
        <span className={css(extraStyles.hidden)}>
          {this.state.isFavourite
            ? "Remove from favourites"
            : "Add to favourites"}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={css(styles.svg)}
          viewBox="0 0 50 42"
          width="50"
          height="42"
        >
          <path
            className={css(this.state.isFavourite && styles.svgPath)}
            fill="#000000"
            fillOpacity="0"
            fillRule="evenodd"
            stroke="#000000"
            strokeWidth="3"
            d="M22.5 33.3l-11.5 6 2.2-12.8-9.2-9 12.8-1.9L22.5 4l5.7 11.6L41 17.5l-9.2 9L34 39.3z"
          />
        </svg>
      </button>
    );
  }
}

export default withRoute(Favourite);
