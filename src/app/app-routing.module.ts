import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {NewCocktailComponent} from './pages/new-cocktail/new-cocktail.component';
import {EditCocktailComponent} from './pages/edit-cocktail/edit-cocktail.component';
import {ShowCocktailComponent} from './pages/show-cocktail/show-cocktail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cocktails', component: HomeComponent},
  {path: 'cocktails/new', component: NewCocktailComponent},
  // Route with parameter
  {path: 'cocktails/edit/:id', component: EditCocktailComponent},
  {path: 'cocktails/:id', component: ShowCocktailComponent},
  // Else show home
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
