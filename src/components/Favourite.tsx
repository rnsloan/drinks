import * as React from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { useAsyncEffect } from "use-async-effect";
import getUserStatus from "../utils/getUserStatus";
import { withRoute } from "react-router5";
import { Router } from "router5";
import { StyleSheet, css } from "aphrodite/no-important";
import { styles as extraStyles } from "../utils/css";

const styles = StyleSheet.create({
  button: {
    ":hover": {
      cursor: "pointer"
    },
    ":focus": {
      outline: "none"
    },
    background: "none",
    border: "none",
    transform: "scale(0.8)",
    transformOrigin: "0 0"
  },
  svgPath: {
    fillOpacity: 1
  }
});

const checkIfFavourite = async drinkId => {
  return await firebase
    .database()
    .ref(`users/${firebase.auth().currentUser.uid}`)
    .once("value");
};

interface Props {
  router?: Router;
  drinkId: number;
}

const Favourite: React.FunctionComponent<Props> = props => {
  const [isFavourite, setAsFavourite] = React.useState(false);

  useAsyncEffect(
    async () => {
      await getUserStatus();
      const isFav = await checkIfFavourite(props.drinkId);
      isFav ? setAsFavourite(true) : setAsFavourite(false);
    },
    () => {},
    [props.drinkId]
  );

  const handleClick = async (ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    if (!firebase.auth().currentUser) {
      props.router.navigate("signin");
    } else {
      await firebase
        .database()
        .ref(`users/${firebase.auth().currentUser.uid}`)
        .set({
          [props.drinkId]: !isFavourite
        });

      setAsFavourite(!isFavourite);
    }
  };

  const message = isFavourite ? "Remove from favourites" : "Add to favourites";

  return (
    <button
      title={message}
      onClick={handleClick}
      className={css(styles.button)}
    >
      <span className={css(extraStyles.hidden)}>{message}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 42"
        width="50"
        height="42"
      >
        <path
          className={css(isFavourite && styles.svgPath)}
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
};

export default withRoute(Favourite);
