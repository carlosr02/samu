import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { UFService } from '../services/uf.service';

import { Dados } from '../types/samu';
import { SamuService } from '../services/samu.service';

@Component({
  selector: 'dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent implements OnInit {
  municipios_atendidos: Dados[];

  constructor(private ufService: UFService, private samuService: SamuService,
    private location: Location) { }

  ngOnInit(): void {
    this.ufService.getPorId(13)
      .then(uf => this.samuService.getPorUFMunicipiosAtendidosPorEstado(uf))
      .then(municipios => this.municipios_atendidos = municipios);
  }

  goBack(): void {
    this.location.back();
  }
}
