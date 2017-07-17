import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Dados } from '../types/samu';
import { SamuService } from '../services/samu.service';

@Component({
  selector: 'samu-dados',
  templateUrl: './samu.component.html',
  styleUrls: ['./samu.component.css']
})
export class SamuComponent implements OnInit {
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
