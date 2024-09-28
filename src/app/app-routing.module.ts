import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { RecipeNewComponent } from "./recipes/recipe-new/recipe-new.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";

const appRouts: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent,
    children: [
      {path :'', title: 'Recipes page', component: RecipeStartComponent},
      {path :':id', title: 'Recipe detail page', component: RecipeDetailComponent}
    ]
  },
  {path: 'shopping-list', title: 'Shopping list page', component: ShoppingListComponent},
  {path: '**', title: 'Page not found', component: PageNotFoundComponent},
]

@NgModule ({
  imports: [
    RouterModule.forRoot(appRouts, {useHash: true})
  ],
  exports: [RouterModule],
})

export class AppRoutingModule { }
