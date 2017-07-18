import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { UF } from '../types/uf';
import { Dados } from '../types/samu';
import { SamuService } from '../services/samu.service';
import { UFService } from '../services/uf.service';

class Municipio{
  valor: number;
  uf_nome: UF;
  ano: number;

  constructor(valor, uf_nome, ano){
    this.valor = valor;
    this.uf_nome = uf_nome;
    this.ano = ano;
  }
}

@Component({
  selector: 'todos_dados',
  templateUrl: './todos_dados.component.html',
  styleUrls: ['./todos_dados.component.css']
})
export class TodosDadosComponent implements OnInit {
  municipios: Municipio[];

  constructor(private samuService: SamuService, private ufService: UFService,
    private location: Location) { }

  ngOnInit() : void {
    this.getDados();
  }

  getDados() : void {
    this.samuService.getAllMunicipiosAtendidosPorEstado()
      .then(municipios => municipios
        .forEach(municipio => this.municipios
          .push(new Municipio(
            municipio.valor,
            this.ufService.getPorId(municipio.uf_id),
            municipio.ano))));
  }

  goBack(): void {
    this.location.back();
  }
}
