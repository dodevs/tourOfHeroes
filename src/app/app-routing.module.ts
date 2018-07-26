import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// Rotas
const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full' // só redireciona se for exatamente vazio
    // pathMatch: 'prefix' - redireciona se for qualquer coisa
  },
  { // ROta para heroes
    path: 'heroes', // url
    component: HeroesComponent // componente de destino
  },
  {
    path: 'dashboard',
    component: DashboardComponent
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
