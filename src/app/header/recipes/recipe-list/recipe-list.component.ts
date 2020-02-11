import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeOpened = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe A', 'This is simply a test A', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'),
    new Recipe('A Test Recipe B', 'This is simply a test B', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeOpened(recipe: Recipe) {
    this.recipeOpened.emit(recipe);
  }

}
