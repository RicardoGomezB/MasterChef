import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlatoDetalleComponent } from './componentes/plato-detalle/plato-detalle.component';
import { DataService } from './services/data.service';
import { DataDetalleService } from './services/data-detalle.service';
import { PlatoComponent } from './componentes/plato/plato.component';
import { PrincipalComponent } from './vistas/principal/principal.component';


const routes: Routes = [
  { path: '', redirectTo:'/bienvenida', pathMatch: 'full' },

  {
    path: 'bienvenida', 
    children:[
  
      {path: '**', component: PrincipalComponent} 
    ], component: PrincipalComponent
  }
 
];
@NgModule({
  declarations: [
    AppComponent,
    PlatoDetalleComponent,
    PlatoComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService, DataDetalleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
