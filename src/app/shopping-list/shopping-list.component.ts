import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/indredient.modul';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];
  constructor(){}

  addIngredient(newIngredient){
    this.ingredients.push(newIngredient);
  }

  ngOnInit(): void {}
}
