import * as React from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { Link } from "react-router5";
import { StyleSheet, css } from "aphrodite/no-important";
import Helmet from "react-helmet";
import { useAsyncEffect } from "use-async-effect";
import { getJson } from "../utils/network";
import getUserStatus from "../utils/getUserStatus";
import { styles as globalStyles } from "../utils/css";
import SearchForm from "../components/SearchForm";
import DrinksList from "../components/DrinksList";
import { DrinkInterface } from "../components/Drink";
import categoryIcon, { categories } from "../components/Icon";

const color = "rgba(131,135,162,0.5)";
const styles = StyleSheet.create({
  categories: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  categoryLink: {
    borderRadius: "300px",
    backgroundColor: color,
    width: "120px",
    height: "120px",
    margin: "10px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 700,
    textDecoration: "none"
  },
  categoryImage: {
    width: "50px",
    height: "50px"
  },
  categoryText: {
    width: "80%",
    wordWrap: "break-word"
  }
});

const getFavourites = async (user: firebase.User | false) => {
  if (user) {
    try {
      const snapshot = await firebase
        .database()
        .ref(`users/${user.uid}`)
        .once("value");

      const favourites = snapshot.val();
      const favouritesTrue: Array<number> = Object.keys(favourites).map(
        drinkId => {
          if (snapshot.val()[drinkId]) {
            return parseInt(drinkId, 10);
          }
        }
      );

      const value = await getJson(
        `select+*+from+all_drinks+where+idDrink+IN+%28${favouritesTrue.join(
          "%2C+"
        )}%29`
      );

      if (value.rows.length) {
        return value.rows;
      }
      return [];
    } catch (e) {
      console.log(e);
    }
  }
};

const Home: React.FunctionComponent<{}> = () => {
  const [favouritesData, setFavourites] = React.useState<
    Array<DrinkInterface> | []
  >([]);

  useAsyncEffect(
    async () => {
      const user = await getUserStatus();
      const favourites = await getFavourites(user);
      setFavourites(favourites);
    },
    () => {},
    []
  );

  return (
    <div>
      <Helmet>
        <title>Drinks</title>
        <meta name="description" content="Search for drinks" />
      </Helmet>
      <SearchForm />
      {favouritesData && (
        <div>
          <h3>Your Favourites</h3>
          <DrinksList data={favouritesData} />
        </div>
      )}
      <hr />
      <h2 className={css(globalStyles.hidden)}>Or by category</h2>
      <div className={css(styles.categories)}>
        {categories.map((category, i) => {
          return (
            <Link
              key={i}
              className={css(styles.categoryLink)}
              routeName="search"
              routeParams={{ category }}
            >
              <img
                className={css(styles.categoryImage)}
                src={categoryIcon(category)}
                role="presentation"
              />
              <div className={css(styles.categoryText)}>{category}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
