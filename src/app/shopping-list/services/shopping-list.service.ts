import { EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/indredient.modul';

export class ShoppingListService{

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addedIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }
}
