import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RecipesComponent } from "./recipes/recipes.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const appRouts: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', title: 'Recipes page', component: RecipesComponent},
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
