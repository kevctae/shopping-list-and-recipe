import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 'Recipes';
  title = 'shopping-list-and-recipe';
  
  onPageChanged(page: string) {
    this.currentPage = page;
  }
}
