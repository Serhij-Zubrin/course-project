import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model'; // Import the 'Recipe' class from the appropriate file.
import { RecipeService } from './services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit{
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService,
              private router: Router,
              private rout: ActivatedRoute
  ) { }

ngOnInit(): void {
  this.recipeService.recipeSelected
  .subscribe(
    (recipe: Recipe) => {
      this.selectedRecipe = recipe;
    }
  )
}

}
