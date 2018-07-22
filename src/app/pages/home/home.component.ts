import {Component, OnInit} from '@angular/core';
import {CocktailService} from '../../services/cocktail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Dependency injection of service
  constructor(public cocktailService: CocktailService) {
  }

  ngOnInit() {
  }

}
