import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onAddItem(form: NgForm) {
    console.log(form)
    const value = form.value;
    const newRecipe = new Recipe(value.recipename, value.linkofpicture, value.description);

  }
}
