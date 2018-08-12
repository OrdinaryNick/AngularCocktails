import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Cocktail} from '../../classes/cocktail';
import {CocktailService} from '../../services/cocktail.service';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-cocktail',
  templateUrl: './edit-cocktail.component.html',
  styleUrls: ['./edit-cocktail.component.css']
})
export class EditCocktailComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  public cocktail: Cocktail;
  private instructions: FormArray;
  private ingredients: FormArray;
  public cocktailForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private cocktailService: CocktailService,
    private location: Location,
    private fb: FormBuilder,
    private router: Router) {
  }

  ngOnInit() {
    this.subscriptions.push(
      this.route.paramMap.subscribe(params => {
        const cocktailId = params.get('id');
        this.cocktail = this.cocktailService.getCocktailById(parseInt(cocktailId));
        this.createForm();
      })
    );
  }

  private createForm(): void {
    this.cocktailForm = this.fb.group({ // Group is collection of form inputs
      title: [this.cocktail.title, [Validators.required]],
      description: [this.cocktail.description, [Validators.required]],
      imageUrl: [this.cocktail.imageUrl, [Validators.required]],
      instructions: this.fb.array([]),
      ingredients: this.fb.array([])
    });

    this.instructions = this.cocktailForm.get('instructions') as FormArray;
    this.ingredients = this.cocktailForm.get('ingredients') as FormArray;

    this.cocktail.instructions.forEach((instruction) => {
      this.instructions.push(this.createInstruction(instruction));
    });

    this.cocktail.ingredients.forEach((ingredient) => {
      this.ingredients.push(this.createIngredient(ingredient.amount, ingredient.name));
    });
  }

  private createInstruction(step: string): FormGroup {
    return this.fb.group({
      step: [step, [Validators.required]]
    });
  }

  private createIngredient(amount: string, name: string): FormGroup {
    return this.fb.group({
      amount: [amount, [Validators.required]],
      name: [name, [Validators.required]]
    });
  }

  addInstruction(): void {
    this.instructions.push(this.createInstruction(''));
  }

  addIngredient(): void {
    this.ingredients.push(this.createIngredient('', ''));
  }

  deleteInstruction(index: number): void {
    const arrayControl = this.cocktailForm.controls['instructions'] as FormArray;
    arrayControl.removeAt(index);
  }

  deleteIngredient(index: number): void {
    const arrayControl = this.cocktailForm.controls['ingredient'] as FormArray;
    arrayControl.removeAt(index);
  }

  submitForm(): void {
    if (this.cocktailForm.valid) {
      const {title, description, imageUrl, instructions, ingredients} = this.cocktailForm.value;
      const filteredInstructions = instructions.map((item) => item.step);
      this.cocktailService.updateCocktail(
        new Cocktail({
          id: this.cocktail.id,
          title,
          description,
          imageUrl,
          ingredients,
          instructions: filteredInstructions
        })
      );

      this.router.navigate(['/cocktail/${this.cocktail.id}']);
    } else {
      // else show alert
      console.log('Form error');
    }
  }

  back() {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  getInstructionsForm(): FormArray {
    return <FormArray>this.cocktailForm.get('instructions');
  }

  getIngredientsForm(): FormArray {
    return <FormArray>this.cocktailForm.get('ingredients');
  }
}
