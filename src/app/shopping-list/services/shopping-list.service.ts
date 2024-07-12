import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../../shared/indredient.model';

export class ShoppingListService{
  ingridientChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor(){}

  getIngredients(){
    return this.ingredients.slice();
  }

  addedIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredients = this.comdineIngredients();
    this.ingridientChanged.emit(this.ingredients.slice());
  }

  addIngridients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredients = this.comdineIngredients();
    this.ingridientChanged.emit(this.ingredients.slice());
  }

  comdineIngredients(){
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
