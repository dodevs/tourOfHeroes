import { Component, OnInit, inject, Inject } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from './../hero.service';

// Metadados do componente
@Component({
  selector: 'app-heroes', // ELemento, pode ser identificado em um template HTML
  templateUrl: './heroes.component.html', // Template
  styleUrls: ['./heroes.component.css'] // Estilo privado
})
export class HeroesComponent implements OnInit {
  // Array do tipo Hero
  heroes: Hero[];

  // Implementa o serviço
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes); // Assim que a resposta for recebida o JSON ira para `heroes`
  }

}
