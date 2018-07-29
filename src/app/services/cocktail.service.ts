import {Cocktail} from '../classes/cocktail';
import {IIngredient} from '../interfaces/ingredient';
import {Injectable} from '@angular/core';
// Importing testing data from file
import * as CocktailData from '../../data.json';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  private cocktails: Cocktail[] = [];

  constructor() {
    (<any>CocktailData).cocktails.forEach(cocktail => {
      this.cocktails.push(new Cocktail(cocktail));
    });
  }

  public getCocktails(): Cocktail[] {
    return this.cocktails;
  }

  public getCocktailById(id: number): Cocktail {
    return _.find(this.cocktails, cocktail => cocktail.id === id);
  }

  public createCocktail(title: String, description: String, imageUrl: String, ingredients: IIngredient[], instructions: String[]): Cocktail {
    const newCocktailData = {
      id: this.getNextId(),
      title,
      description,
      imageUrl,
      ingredients: [...ingredients],
      instructions: [...instructions]
    };

    const newCocktail = new Cocktail(newCocktailData);

    this.cocktails.push(newCocktail);
    return newCocktail;
  }

  public updateCocktail(cocktail: Cocktail): Cocktail {
    const cocktailIndex = _.findIndex(this.cocktails, (c) => c.id === cocktail.id);
    this.cocktails[cocktailIndex] = cocktail;

    return cocktail;
  }

  public deleteCocktail(id: Number): void {
    const cocktailIndex = _.findIndex(this.cocktails, (c) => c.id === id);

    if (cocktailIndex !== -1) {
      this.cocktails.splice(cocktailIndex, 1);
    }
  }

  private getNextId(): number {
    const max = _.maxBy(this.cocktails, (cocktail) => cocktail.id);
    return max + 1;
  }
}
