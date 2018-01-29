import * as React from "react";
import { Link } from "react-router5";
import { StyleSheet, css } from "aphrodite/no-important";
import SearchForm from "../components/SearchForm";
import categoryIcon, { categories } from "../components/Icon";
import { styles as globalStyles } from "../utils/css";

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

const Home = () => {
  return (
    <div>
      <SearchForm />
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
