import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { DataDetalleService} from 'src/app/services/data-detalle.service';

@Component({
  selector: 'app-plato',
  templateUrl: './plato.component.html',
  styleUrls: ['./plato.component.css']
})
export class PlatoComponent implements OnInit {
  data: DataService;
  detalle: DataDetalleService;

constructor(service: DataService) { 
  this.data= service;
}
 

  ngOnInit() {
  }

}
