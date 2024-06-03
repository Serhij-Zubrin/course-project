import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   activeMenu = 'recipe';
  constructor(){

  }

  ngOnInit(): void {

  }

  onNavigate(text: string){
    this.activeMenu = text;
  }
}
