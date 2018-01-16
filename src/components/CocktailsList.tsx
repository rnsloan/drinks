import * as React from "react";

const testData = [
  {
    "Unnamed: 0": 148,
    strDrink: "Bloody Mary",
    dateModified: "2015-08-18 15:09:14",
    idDrink: 11113,
    strAlcoholic: "Alcoholic",
    strCategory: "Ordinary Drink",
    strDrinkThumb:
      "http://www.thecocktaildb.com/images/media/drink/uyquuu1439906954.jpg",
    strGlass: "Old-fashioned glass",
    strIBA: "Contemporary Classics",
    strIngredient1: "Vodka",
    strIngredient10: null,
    strIngredient11: null,
    strIngredient12: null,
    strIngredient13: null,
    strIngredient14: null,
    strIngredient15: null,
    strIngredient2: "Tomato juice",
    strIngredient3: "Lemon juice",
    strIngredient4: "Worcestershire sauce",
    strIngredient5: "Tabasco sauce",
    strIngredient6: "Lime",
    strIngredient7: null,
    strIngredient8: null,
    strIngredient9: null,
    strInstructions:
      "Stirring gently, pour all ingredients into highball glass. Garnish.",
    strMeasure1: "1 1/2 oz ",
    strMeasure10: " ",
    strMeasure11: " ",
    strMeasure12: null,
    strMeasure13: null,
    strMeasure14: null,
    strMeasure15: null,
    strMeasure2: "3 oz ",
    strMeasure3: "1 dash ",
    strMeasure4: "1/2 tsp ",
    strMeasure5: "2-3 drops ",
    strMeasure6: "1 wedge ",
    strMeasure7: " ",
    strMeasure8: " ",
    strMeasure9: " ",
    strVideo: null
  }
];

const Cocktail = props => {
  console.log(props);
  return <div>{props.data.strDrink}</div>;
};

const CocktailsList = props => {
  return (
    <ul>
      {testData.map(cocktail => {
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
