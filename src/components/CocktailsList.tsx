import * as React from "react";
import Cocktail, { CocktailInterface } from "./Cocktail";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  list: {
    listStyleType: "none",
    margin: 0,
    padding: 0
  }
});

interface CocktailsListProps {
  data: Array<CocktailInterface>;
}

const CocktailsList: React.SFC<CocktailsListProps> = props => {
  return (
    <div>
      <h2>Results:</h2>
      <ul className={css(styles.list)}>
        {props.data.map(cocktail => {
          return (
            <li key={cocktail.idDrink}>
              <Cocktail data={cocktail} makeTitleLink={true} short={true} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CocktailsList;
