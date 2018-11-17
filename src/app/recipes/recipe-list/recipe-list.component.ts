import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  public recipes: Array<Recipe> = [
    new Recipe('Test Recipe', 'This is a test description',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJZ-5zBNcA3GiViSLw_ScXvr5NNdTQ1KLP3tgLAyOsCn-NnZK0bA')
  ];
  constructor() { }

  ngOnInit() {
  }

}
