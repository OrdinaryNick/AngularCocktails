import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCocktailComponent } from './new-cocktail.component';

describe('NewCocktailComponent', () => {
  let component: NewCocktailComponent;
  let fixture: ComponentFixture<NewCocktailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCocktailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCocktailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
