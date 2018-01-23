import * as React from "react";
import Cocktail, { CocktailInterface } from "./Cocktail";

interface CocktailProps {
  data: Array<CocktailInterface>;
}

const CocktailsList = props => {
  return (
    <ul>
      {props.data.map(cocktail => {
        return (
          <li key={cocktail.idDrink}>
            <Cocktail data={cocktail} />
          </li>
        );
      })}
    </ul>
  );
};

export default CocktailsList;
