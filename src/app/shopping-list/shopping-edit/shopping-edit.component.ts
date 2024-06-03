import { Component, ElementRef, Output, ViewChild, EventEmitter } from "@angular/core";
import { Ingredient } from "../../shared/indredient.modul";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @ViewChild('nameInput', {static: false}) name:ElementRef;
  @ViewChild('amountInput', {static: false}) amount:ElementRef;
  @Output() addNewIngredient = new EventEmitter<Ingredient>();

  addIngredient(){
    const ingName = this.name.nativeElement.value;
    const ingAmount = this.amount.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.addNewIngredient.emit(newIngredient);
    this.clearField()
  }

  clearField(){
    this.name.nativeElement.value = '';
    this.amount.nativeElement.value = '';
  }
}
