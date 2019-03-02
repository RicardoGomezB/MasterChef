import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlatoDetalleComponent } from './componentes/plato-detalle/plato-detalle.component';
import { DataService } from './services/data.service';
import { DataDetalleService } from './services/data-detalle.service';
import { PlatoComponent } from './componentes/plato/plato.component';
import { PrincipalComponent } from './vistas/principal/principal.component';
import { DescripcionComponent } from './vistas/descripcion/descripcion.component';


const routes: Routes = [
  { path: '', redirectTo:'/bienvenida', pathMatch: 'full' },

  {
    path: 'bienvenida', 
    children:[
  
      {path: 'bienvenida', component: PrincipalComponent}
      
     
    ], component: PrincipalComponent
  },

  {
    path: 'home', 
    children:[
      { path: 'home', redirectTo: '/home/detalle', pathMatch: 'full' },
      {path: 'detalle', component: DescripcionComponent}
     
    ], component: DescripcionComponent
  }
 
];


@NgModule({
  declarations: [
    AppComponent,
    PlatoDetalleComponent,
    PlatoComponent,
    PrincipalComponent,
    DescripcionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [RouterModule.forRoot(routes)]
    
  ],
  providers: [DataService, DataDetalleService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
