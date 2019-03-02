import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { DataDetalleService} from 'src/app/services/data-detalle.service';

@Component({
  selector: 'app-chef-info',
  templateUrl: './chef-info.component.html',
  styleUrls: ['./chef-info.component.css']
})

export class ChefInfoComponent implements OnInit {

  data: DataService;
  resInfo;

  constructor(service: DataService) { 
    this.data= service;
    this.resInfo = this .data.getResInfo();
  }

  ngOnInit() {
  }

}
