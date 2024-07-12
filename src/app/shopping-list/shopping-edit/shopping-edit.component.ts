import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";

import { Ingredient } from "../../shared/indredient.model";
import { ShoppingListService } from "../services/shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit{

  @ViewChild('nameInput', {static: false}) name:ElementRef;
  @ViewChild('amountInput', {static: false}) amount:ElementRef;

  constructor(private shoppingListService: ShoppingListService){}

  ngOnInit(): void {}

  addIngredient(){
    const ingName = this.name.nativeElement.value;
    const ingAmount = this.amount.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.shoppingListService.addedIngredient(newIngredient);
    this.clearField()
  }

  clearField(){
    this.name.nativeElement.value = '';
    this.amount.nativeElement.value = '';
  }
}
