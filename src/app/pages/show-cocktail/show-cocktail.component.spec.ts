import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCocktailComponent } from './show-cocktail.component';

describe('ShowCocktailComponent', () => {
  let component: ShowCocktailComponent;
  let fixture: ComponentFixture<ShowCocktailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCocktailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCocktailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
