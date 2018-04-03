import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'https://www.army.mil/e2/c/images/2015/10/30/414509/size0.jpg', 'A Test Recipe')
  ];


  constructor() { }

  ngOnInit() {
  }

}
