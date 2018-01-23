import * as React from "react";
import { ReactHTMLElement, HTMLFactory } from "react";

export interface CocktailInterface {
  strDrink: string;
  idDrink: number;
  dateModified: Date;
  strAlcoholic: string;
  strCategory: string;
  strDrinkThumb: string;
  strGlass: string;
  strIBA: string;
  strIngredient1: string;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strInstructions: string;
  strMeasure1: string | null;
  strMeasure10: string | null;
  strMeasure11: string | null;
  strMeasure12: string | null;
  strMeasure13: string | null;
  strMeasure14: string | null;
  strMeasure15: string | null;
  strMeasure2: string | null;
  strMeasure3: string | null;
  strMeasure4: string | null;
  strMeasure5: string | null;
  strMeasure6: string | null;
  strMeasure7: string | null;
  strMeasure8: string | null;
  strMeasure9: string | null;
  strVideo: string | null;
}

interface CocktailProps {
  data: CocktailInterface;
}

function ingredientList(
  cocktail: CocktailInterface
): Array<HTMLFactory<HTMLLIElement>> {
  const ingredients = [];
  for (let i = 1, len = 15; i < len; i++) {
    if (typeof cocktail[`strIngredient${i}`] === "string") {
      ingredients.push(
        <li key={i}>
          {`${cocktail[`strIngredient${i}`]}: ${cocktail[`strMeasure${i}`]}`}
        </li>
      );
    }
  }
  return ingredients;
}

const Cocktail = props => {
  const { data } = props;
  return (
    <section>
      <h2>{data.strDrink}</h2>
      <h3>
        Alcoholic: {data.strAlcoholic === "Alcoholic" ? "Yes" : "No"}
        <br />
      </h3>
      <h3>Ingredients:</h3>
      <ul>{ingredientList(props.data)}</ul>
      <h3>Instructions:</h3>
      <p>{data.strInstructions}</p>
      {data.strDrinkThumb && (
        <p>
          <img
            src={data.strDrinkThumb}
            alt="data.strDrink"
            width="100"
            height="100"
          />
        </p>
      )}
      {data.strVideo && <a href={data.strVideo}>Video</a>}
    </section>
  );
};

export default Cocktail;
