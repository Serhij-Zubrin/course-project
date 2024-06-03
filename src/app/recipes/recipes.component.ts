import { Component } from '@angular/core';
import { Recipe } from './recipe.model'; // Import the 'Recipe' class from the appropriate file.

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {
  selectedRecipe: Recipe;

  onSelectedRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }

}
