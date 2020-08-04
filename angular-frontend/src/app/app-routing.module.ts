import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PlatosComponent } from './components/platos/platos.component';
import { DetallePlatoComponent } from './components/detalle-plato/detalle-plato.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'platos', component: PlatosComponent },
  { path: 'detallePlato/:id', component: DetallePlatoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },   //si agrega cualquier cosa en la ruta redireccionar a "home"
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
