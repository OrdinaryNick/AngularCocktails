import {IIngredient} from './ingredient';

export interface ICocktail {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  ingredients: IIngredient[];
  instructions: string[];
}
