import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared/hero.model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  providers: []
})

export class HeroesComponent implements OnInit {
  
  ngOnInit(): void {
    this.getHeroesSlowly();
  }

  constructor(private heroService: HeroService) {
  }

  selectedHero: Hero;
  heroes

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };

  // getHeroes(): void {
  //   this.heroService.getHeroes()
  //     .then(heroes => this.heroes = heroes);
  // }

  getHeroesSlowly(): void {
    this.heroService.getHeroesSlowly()
      .then(heroes => this.heroes = heroes);
  }

}


