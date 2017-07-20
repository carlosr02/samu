import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { UF } from '../types/uf';
import { Dados } from '../types/samu';
import { Atendimentos } from '../types/samu';

import { SamuService } from '../services/samu.service';

@Component({
  selector: 'todos_dados',
  templateUrl: './todos_dados.component.html',
  styleUrls: ['./todos_dados.component.css']
})
export class TodosDadosComponent implements OnInit {
  atendimentos: Atendimentos[] = [];

  constructor(private samuService: SamuService, private location: Location) { }

  ngOnInit() : void {
    this.samuService.getAllMunicipiosAtendidosPorEstadoComNome()
      .then(atendimentos => this.atendimentos = atendimentos);
  }

  goBack(): void {
    this.location.back();
  }
}
