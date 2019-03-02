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
    recipes
    detalle: DataDetalleService;
    resInfo;
    
  constructor(service: DataService) { 
    this.data= service;
    this.recipes = this.data.getRecipes();
    this.resInfo = this .data.getResInfo();
  }

  onShowDetalle(name_plato: String){
    DataDetalleService.name_plato = name_plato;
  }

  ngOnInit() {
  }

}
