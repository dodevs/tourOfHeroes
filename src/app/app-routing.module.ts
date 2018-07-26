import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';

// Rotas
const routes: Routes = [
  { // ROta para heroes
    path: 'heroes', // url
    component: HeroesComponent // componente de destino
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) // Configura a rota em nível de raiz da aplicação
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
