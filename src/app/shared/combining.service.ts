import { Ingredient } from "./indredient.model";

export class CombiningService{
  ingredients: Ingredient[];

  constructor() {}

  comdineIngredients(ingredients: Ingredient[]){
    this.ingredients = ingredients;
    let combinedIngredients = this.ingredients.reduce((acc, curr) => {
      let found = acc.find((item) => item.name === curr.name);
      if (found) {
        found.amount += curr.amount;
      } else {
        acc.push(new Ingredient(curr.name, curr.amount));
      }
      return acc;
    }, []);
    return combinedIngredients;
  }
}
