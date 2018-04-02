import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;

  user = {
    recipename: "",
    linkofpicture: "",
    description: "",

  };

  constructor() { }

  ngOnInit() {
  };

  onSubmit() {
    this.user.recipename = this.signupForm.value.userData.recipename;
    this.user.linkofpicture = this.signupForm.value.userData.linkofpicture;
    this.user.description = this.signupForm.value.userData.description;

  }
}
