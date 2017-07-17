import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Dados } from '../types/samu';
import { SamuService } from '../services/samu.service';

@Component({
  selector: 'todos_dados',
  templateUrl: './todos_dados.component.html',
  styleUrls: ['./todos_dados.component.css']
})
export class TodosDadosComponent implements OnInit {
  municipios: Dados[];

  constructor(private samuService: SamuService, private location: Location) { }

  ngOnInit() : void {
    this.getDados();
  }

  getDados() : void {
    this.samuService.getAllMunicipiosAtendidosPorEstado().then(municipios => this.municipios = municipios);
  }

  goBack(): void {
    this.location.back();
  }
}
