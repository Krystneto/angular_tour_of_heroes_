import { Component } from '@angular/core';
import { Hero } from './shared/hero.model';
import { HEROES } from './mock-heroes';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class AppComponent {
  
  constructor(private heroService: HeroService) {
  }

  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes = HEROES;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

}


