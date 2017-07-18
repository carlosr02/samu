import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UF } from '../types/uf';
import { UFService } from '../services/uf.service';

import {Dados} from '../types/samu';
import { SamuService } from '../services/samu.service';

@Component({
  selector: 'resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.css']
})
export class ResumoComponent implements OnInit {
  uf: UF;
  media: number;

  constructor(private ufService: UFService, private samuService: SamuService,
    private router: Router) { }

  ngOnInit(): void {
    this.ufService.getPorId(13)
      .then(uf => this.uf = uf)
      .then(uf => this.samuService.getPorUFMunicipiosAtendidosPorEstado(uf))
      .then(dados => this.media = this.calcularMedia(dados));
  }

  verDados(): void {
    this.router.navigate(['/dados']);
  }

  calcularMedia(dados: Dados[]): number {
    var total = 0;
    dados.forEach(item => total += item.valor);
    return total / dados.length;
  }
}
