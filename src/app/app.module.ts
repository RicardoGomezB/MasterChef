import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlatoDetalleComponent } from './componentes/plato-detalle/plato-detalle.component';
import { DataService } from './services/data.service';
import { DataDetalleService } from './services/data-detalle.service';
import { PlatoComponent } from './componentes/plato/plato.component';

@NgModule({
  declarations: [
    AppComponent,
    PlatoDetalleComponent,
    PlatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService, DataDetalleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
