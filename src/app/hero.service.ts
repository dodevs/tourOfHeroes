import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs'; // RxJS Observable an of method

import { Hero } from './hero'; // Class hero
import { HEROES } from './mock-heroes'; // Mock heroes
import { MessageService } from './message.service';

// Injectable decorator com propriedades definidas
// [providedIn:   root] o deixa disponivel para qualquer classe
@Injectable({providedIn: 'root'})
export class HeroService {

  // Service-in-service - Um serviço injetado em outro
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes'); // Envia a mensagem e depois entrega os heroes
    return of(HEROES); // rxjs.of() retorna um Observable [ Emite notificações a cada mudança ]
  }
}
