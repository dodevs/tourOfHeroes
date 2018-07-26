import { Injectable } from '@angular/core';
import { Hero } from './hero'; // Class hero
import { HEROES } from './mock-heroes'; // Mock heroes

// Injectable decorator com propriedades definidas
// [providedIn:   root] o deixa disponivel para qualquer classe
@Injectable({providedIn: 'root'})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }
}
