import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

import { RecipeService } from '../services/recipe.service';
import { Ingredient } from '../../shared/indredient.model';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;


  constructor(private recipeService: RecipeService) { }

ngOnInit(): void {

}

  addToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
