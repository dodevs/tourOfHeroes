import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'; //Http dependencies

import { Observable, of } from 'rxjs'; // RxJS Observable an of method

import { Hero } from './hero'; // Class hero
import { HEROES } from './mock-heroes'; // Mock heroes
import { MessageService } from './message.service';
import { TouchSequence } from 'selenium-webdriver';

// Injectable decorator com propriedades definidas
// [providedIn:   root] o deixa disponivel para qualquer classe
@Injectable({providedIn: 'root'})
export class HeroService {

  private heroesUrl = 'api/heroes'; // URL para a api web

  // Service-in-service - Um serviço injetado em outro
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
    /*this.messageService.add('HeroService: fetched heroes'); // Envia a mensagem e depois entrega os heroes
    return of(HEROES); // rxjs.of() retorna um Observable [ Emite notificações a cada mudança ]*/
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find( hero => hero.id === id)); // Retorna um observable do resultado da busca
  }

  /* Loggar uma mensagem com o serviço MessageService */
  private log(message: string) {
    this.messageService.add(`Hero Service: ${message}`);
  }
}
