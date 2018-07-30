import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'; // Http dependencies

import { Observable, of } from 'rxjs'; // RxJS Observable an of method
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero'; // Class hero
import { HEROES } from './mock-heroes'; // Mock heroes
import { MessageService } from './message.service';

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
    // retorna um Observable também. Um array de objeto do tipo Hero
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap( () => this.log('fetched heroes')),
        catchError(this.handleError('getHeroes', [])) // Intercepta e trata erros se o observable falhar
      );
    /* return of(HEROES); // rxjs.of() retorna um Observable [ Emite notificações a cada mudança ]*/
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url)
      .pipe(
        tap( () => this.log(`fetched hero id=${id}`)),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
      );
    /* return of(HEROES.find( hero => hero.id === id)); // Retorna um observable do resultado da busca */
  }

  /* Loggar uma mensagem com o serviço MessageService */
  private log(message: string) {
    this.messageService.add(`Hero Service: ${message}`);
  }

  /**
   * Trata um aoperação Http se ela falhar.
   * Não impede o app de continuar.
   * @param operation - nome da operação que falhou.
   * @param result - valor opcional para ser rertornado como um observable.
   */
  // Tipo genereico <T>
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: enviar o erro para uma infraestrutura remote de log
      console.error(error);

      // TODO: um trabalho melhor na transformação do erro para consumo do usuário
      this.log(`${operation} failed: ${error.message}`);

      // O aplicativo continua funcionando retornando um resultado vazio.
      return of(result as T);
    };
  }
}
