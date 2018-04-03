import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes =[
  { path: '', component: HomeComponent },
  { path: 'recipeform', component: RecipeEditComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    RecipeDetailsComponent,
    RecipeEditComponent,
    RecipeListComponent,
    HeaderComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
