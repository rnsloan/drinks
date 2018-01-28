import * as React from "react";
import Cocktail, { CocktailInterface } from "./Cocktail";
import { StyleSheet, css } from "aphrodite/no-important";
const cocktail = require("../assets/cocktail.svg") as string;
const cocoa = require("../assets/cocoa.svg") as string;
const coffee = require("../assets/coffee.svg") as string;
const liqueur = require("../assets/liqueur.svg") as string;
const milk = require("../assets/milk.svg") as string;
const other = require("../assets/other.svg") as string;
const party = require("../assets/party.svg") as string;
const shot = require("../assets/shot.svg") as string;
const soda = require("../assets/soda.svg") as string;

const styles = StyleSheet.create({
  list: {
    listStyleType: "none",
    margin: 0,
    padding: 0
  },
  listItem: {
    paddingLeft: "40px",
    background: "no-repeat 0 0",
    backgroundSize: "contain"
  }
});

function category(category: string) {
  let icon = other;
  console.log(category);
  switch (category) {
    case "Ordinary Drink":
      break;
    case "Cocktail":
      icon = cocktail;
      break;
    case "Shot":
      icon = shot;
      break;
    case "Punch / Party Drink":
      icon = party;
      break;
    case "Other/Unknown":
      icon = other;
      break;
    case "Coffee / Tea":
      icon = coffee;
      break;
    case "Milk / Float / Shake":
      icon = milk;
      break;
    case "Homemade Liqueur":
      icon = liqueur;
      break;
    case "Soft Drink / Soda":
      icon = soda;
      break;
    case "Cocoa":
      icon = cocoa;
      break;
  }
  return icon;
}

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
            <li
              className={css(styles.listItem)}
              style={{
                backgroundImage: `url(${category(cocktail.strCategory)}`
              }}
              key={cocktail.idDrink}
            >
              <Cocktail data={cocktail} inList={true} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CocktailsList;
