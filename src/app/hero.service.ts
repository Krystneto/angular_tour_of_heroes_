import { Injectable } from '@angular/core';

import { Hero } from './shared/hero.model'
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

  getHeroes(): Hero[] {
    return HEROES;
  }
}
