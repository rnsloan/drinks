import * as React from "react";
import Cocktail, { CocktailInterface } from "./Cocktail";

interface CocktailsListProps {
  data: Array<CocktailInterface>;
}

const CocktailsList: React.SFC<CocktailsListProps> = props => {
  return (
    <ul>
      {props.data.map(cocktail => {
        return (
          <li key={cocktail.idDrink}>
            <Cocktail data={cocktail} makeTitleLink={true} short={true} />
          </li>
        );
      })}
    </ul>
  );
};

export default CocktailsList;
