import { Injectable } from '@angular/core';
import { Hero } from './hero'; // Class hero
import { HEROES } from './mock-heroes'; // Mock heroes
import { Observable, of } from 'rxjs'; //

// Injectable decorator com propriedades definidas
// [providedIn:   root] o deixa disponivel para qualquer classe
@Injectable({providedIn: 'root'})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES); // rxjs.of() retorna um Observable [ Emite notificações a cada mudança ]
  }
}
