import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCocktailComponent } from './edit-cocktail.component';

describe('EditCocktailComponent', () => {
  let component: EditCocktailComponent;
  let fixture: ComponentFixture<EditCocktailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCocktailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCocktailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
