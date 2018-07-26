import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // traz informações sobre a rota para essa instancia
import { Location } from '@angular/common'; // Serviço para interagir com o browser

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // Para poder receber dados
  @Input() hero: Hero;

  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    // snapshot é uma imagem estática da rota após o componente ser criado
    // paramMap é um dicionario dos parametros extraidos da url
    const id = +this.route.snapshot.paramMap.get('id');
    this.getHero(id);
  }

  getHero(id): void {
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

}
