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

  // Objeto do tipo `Hero`
  selectedHero: Hero;

  // Implementa o serviço
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  // Retorna nada
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

}
