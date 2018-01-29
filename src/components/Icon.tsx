import * as React from "react";
const cocktail = require("../assets/cocktail.svg") as string;
const cocoa = require("../assets/cocoa.svg") as string;
const coffee = require("../assets/coffee.svg") as string;
const liqueur = require("../assets/liqueur.svg") as string;
const milk = require("../assets/milk.svg") as string;
const other = require("../assets/other.svg") as string;
const party = require("../assets/party.svg") as string;
const shot = require("../assets/shot.svg") as string;
const soda = require("../assets/soda.svg") as string;

const categoryIcon = (category: string) => {
  let icon = other;
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
};

export default categoryIcon;
