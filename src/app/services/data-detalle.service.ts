import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataDetalleService {

  static name_plato: String;

  constructor() {
    DataDetalleService.name_plato = 'name_plato';
   }
}
