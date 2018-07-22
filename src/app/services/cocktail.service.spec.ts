import { TestBed, inject } from '@angular/core/testing';

import { CocktailService } from './cocktail.service';

describe('CocktailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CocktailService]
    });
  });

  it('should be created', inject([CocktailService], (service: CocktailService) => {
    expect(service).toBeTruthy();
  }));
});
