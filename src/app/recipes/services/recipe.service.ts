import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "../recipe.model";
import { Ingredient } from "../../shared/indredient.model";
import { ShoppingListService } from "../../shopping-list/services/shopping-list.service";

@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();

  private recipes:Recipe[] =[
    new Recipe(
      'Homemade Ratatouille Recipe (Layered)',
      'Honestly, if it weren’t for that Disney movie about the rat, I doubt my kids would have been so eager to try my ratatouille recipe. But once they did, they were delighted and now it’s a dish I love to make when I feel like we should have something meatless. Made with a bounty of fresh, colorful vegetables, you’ll love the garden-fresh flavors in this tasty meal!',
      'https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg',
      [
        new Ingredient('Eggplant', 1),
        new Ingredient('Zucchini', 2),
        new Ingredient('Tomatoes', 6),
        new Ingredient('Carrot', 1),
        new Ingredient('Onion', 1),
        new Ingredient('Garlic', 1),
        new Ingredient('Dried herbs', 1),
        new Ingredient('Olive oil' , 1),
      ]),
    new Recipe(
      'Million Dollar Spaghetti',
      'Most pasta dishes are rich and comforting, but only one is so good it can be called Million Dollar Spaghetti. This casserole looks like your standard pasta bake, but it eats more like lasagna - and it’s one hour (or more) quicker to make. In Million Dollar Spaghetti, the ricotta layer lends an overall creamy texture, but it’s not too heavy or rich. A thick layer of meat sauce keeps everything loose. (If you’ve had a dry spaghetti bake, you’ll know what we mean.) Did we mention there is cheese? Four kinds of cheese are in this spaghetti casserole so that every bite is ooey and gooey. Keep reading to learn how to make Million Dollar Spaghetti casserole - and leave us a review if you try it and love it.',
      'https://www.southernliving.com/thmb/jM1YjcVqzkt-Ej6pMp7qK--c_9Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Millionaire_Spaghetti_019-34e9c04b1ae8405088f53450a048e413.jpg',
      [
        new Ingredient('Olive oil', 1),
        new Ingredient('Ground Beef', 2),
        new Ingredient('Onion', 4),
        new Ingredient('Garlic', 2),
        new Ingredient('Marinara Sauce', 1),
        new Ingredient('Dried Italian Seasoning', 2),
        new Ingredient('Salt', 1),
        new Ingredient('Pepper', 1),
        new Ingredient('Mozzarella Cheese' , 1)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService){}

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index]
  }

  addIngredientsToShoppingList(addIngridients: Ingredient[]){
    this.shoppingListService.addIngridients(addIngridients);
  }

}
