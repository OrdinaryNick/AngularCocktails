import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CocktailService} from '../../services/cocktail.service';
import {Location} from '@angular/common';
import {Subscription} from 'rxjs';
import {Cocktail} from '../../classes/cocktail';

@Component({
  selector: 'app-show-cocktail',
  templateUrl: './show-cocktail.component.html',
  styleUrls: ['./show-cocktail.component.css']
})
export class ShowCocktailComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  public cocktail: Cocktail;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cocktailService: CocktailService,
    private location: Location
  ) {

  }

  ngOnInit() {
    this.subscriptions.push(
      this.route.paramMap.subscribe(params => {
        const cocktailId = params.get('id');
        this.cocktail = this.cocktailService.getCocktailById(parseInt(cocktailId));
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

  back() {
    this.location.back();
  }

  deleteCocktail(): void {
    this.cocktailService.deleteCocktail(this.cocktail.id);
    this.router.navigate(['']);
  }
}
