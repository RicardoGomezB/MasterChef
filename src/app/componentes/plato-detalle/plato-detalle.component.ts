import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { DataDetalleService} from 'src/app/services/data-detalle.service';

@Component({
  selector: 'app-plato-detalle',
  templateUrl: './plato-detalle.component.html',
  styleUrls: ['./plato-detalle.component.css']
})
export class PlatoDetalleComponent implements OnInit {

    data: DataService;
    detalle: DataDetalleService;

  constructor(service: DataService) { 
    this.data= service;
  }

  onShowDetalle(name_plato: String){
    DataDetalleService.name_plato = name_plato;
  }

  ngOnInit() {
  }

}
