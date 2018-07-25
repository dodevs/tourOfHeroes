import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

// Metadados do componente
@Component({
  selector: 'app-heroes', // ELemento, pode ser identificado em um template HTML
  templateUrl: './heroes.component.html', // Template
  styleUrls: ['./heroes.component.css'] // Estilo privado
})
export class HeroesComponent implements OnInit {
  // Array do tipo Hero
  heroes = HEROES;

  // Objeto do tipo `Hero`
  selectedHero: Hero;

  // Retorna nada
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor() { }

  ngOnInit() {
  }

}
