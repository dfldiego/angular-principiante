import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PlatosComponent } from './components/platos/platos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetallePlatoComponent } from './components/detalle-plato/detalle-plato.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ItemPlatoComponent } from './components/item-plato/item-plato.component';
import { PlatoListaComponent } from './components/plato-lista/plato-lista.component';
import { PlatoAdminComponent } from './components/plato-admin/plato-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    PlatosComponent,
    DetallePlatoComponent,
    BuscadorComponent,
    ItemPlatoComponent,
    PlatoListaComponent,
    PlatoAdminComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
