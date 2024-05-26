import {
  Component,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  collapsed = true;

  @Output() menuItemSelected = new EventEmitter<string>();

  onSelect(menuItem:string){
    this.menuItemSelected.emit(menuItem);
  }
}
