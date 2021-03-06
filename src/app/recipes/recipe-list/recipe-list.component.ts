import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test description.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Aloo_chat_Recipe.JPG/1280px-Aloo_chat_Recipe.JPG'),
    new Recipe('Another Test Recipe', 'This is another test description.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Aloo_chat_Recipe.JPG/1280px-Aloo_chat_Recipe.JPG')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(selectedRecipe: Recipe) {
    this.recipeWasSelected.emit(selectedRecipe);
  }

}
