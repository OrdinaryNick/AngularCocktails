import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

// Services
import {CocktailService} from './services/cocktail.service';

// Components
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HomeComponent} from './pages/home/home.component';
import {EditCocktailComponent} from './pages/edit-cocktail/edit-cocktail.component';
import {ShowCocktailComponent} from './pages/show-cocktail/show-cocktail.component';
import {NewCocktailComponent} from './pages/new-cocktail/new-cocktail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    EditCocktailComponent,
    ShowCocktailComponent,
    NewCocktailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    CocktailService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
