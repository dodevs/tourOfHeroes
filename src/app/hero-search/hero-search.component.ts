import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) { }

  // Coloca um termo de busca dentro do stream observable
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.heroes$ = this.searchTerms
      .pipe(
        // Aguarda 300ms depois de cada key antes de considerar o termo
        debounceTime(300),

        // igonora o novo termos e for igual ao anterior
        distinctUntilChanged(),

        // troca para um novo search observable toda vez que o termo muda.
        // Funciona como a implementação do debounce, só mantem o ultimo servico chamado
        switchMap((term: string) => this.heroService.searchHeroes(term)),
      );
  }

}
