import {ICocktail} from '../interfaces/cocktail';
import {IIngredient} from './../interfaces/ingredient';

export class Cocktail implements Cocktail {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  ingredients: IIngredient[];
  instructions: string[];

  // Constructor which accepts object with this attributes.
  constructor({id, title, description, imageUrl, ingredients, instructions}) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
    this.instructions = instructions;
  }
}
