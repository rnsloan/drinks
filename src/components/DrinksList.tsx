import * as React from "react";
import Drink, { IDrink } from "./Drink";
import { StyleSheet, css } from "aphrodite/no-important";
import categoryIcon from "./Icon";

const styles = StyleSheet.create({
  list: {
    listStyleType: "none",
    margin: 0,
    padding: 0
  },
  listItem: {
    paddingLeft: "30px",
    background: "no-repeat 0 0",
    backgroundSize: "21px"
  }
});

export interface IDrinksList {
  data: Array<IDrink>;
}

const DrinksList: React.FunctionComponent<IDrinksList> = props => {
  return (
    <ul className={css(styles.list)}>
      {props.data.map(drink => {
        return (
          <li
            className={css(styles.listItem)}
            style={{
              backgroundImage: `url(${categoryIcon(drink.strCategory)}`
            }}
            key={drink.idDrink}
          >
            <Drink data={drink} inList={true} />
          </li>
        );
      })}
    </ul>
  );
};

export default DrinksList;
