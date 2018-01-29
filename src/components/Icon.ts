const cocktail = require("../assets/cocktail.svg") as string;
const cocoa = require("../assets/cocoa.svg") as string;
const coffee = require("../assets/coffee.svg") as string;
const liqueur = require("../assets/liqueur.svg") as string;
const milk = require("../assets/milk.svg") as string;
const other = require("../assets/other.svg") as string;
const party = require("../assets/party.svg") as string;
const shot = require("../assets/shot.svg") as string;
const soda = require("../assets/soda.svg") as string;

export const categories: Array<string> = [
  "Ordinary Drink",
  "Cocktail",
  "Shot",
  "Punch / Party Drink",
  "Other/Unknown",
  "Coffee / Tea",
  "Milk / Float / Shake",
  "Homemade Liqueur",
  "Soft Drink / Soda",
  "Cocoa"
];

const categoryIcon = (category: string) => {
  let icon = other;
  switch (category) {
    case categories[1]:
      icon = cocktail;
      break;
    case categories[2]:
      icon = shot;
      break;
    case categories[3]:
      icon = party;
      break;
    case categories[4]:
      icon = other;
      break;
    case categories[5]:
      icon = coffee;
      break;
    case categories[6]:
      icon = milk;
      break;
    case categories[7]:
      icon = liqueur;
      break;
    case categories[8]:
      icon = soda;
      break;
    case categories[9]:
      icon = cocoa;
      break;
  }
  return icon;
};

export default categoryIcon;
