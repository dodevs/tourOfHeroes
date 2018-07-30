import { Component, OnInit } from '@angular/core';

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

  add(name: string): void {
    name = name.trim(); // remove os espaços em branco
    if (!name) { return; } // Se o nome for vazio, retorna
    this.heroService.addHero({ name } as Hero) // Salva o novo heroi e adiciona no array
      .subscribe(hero => {
        this.heroes.push(hero);
      }
    );
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
