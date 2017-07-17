import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UF } from '../types/uf';
import { UFService } from '../services/uf.service';

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
      .then(function(uf){
        this.media = this.calcularMedia(uf)});
  }

  verDados(): void {
    this.router.navigate(['/dados']);
  }

  calcularMedia(uf: UF): number {
    var total = 0;
    var qnt = 0;
    this.samuService.getPorUFMunicipiosAtendidosPorEstado(uf)
      .then(municipios => municipios.forEach(function(obj) {
        total+=obj.valor;
        qnt++;
      }));
    return Math.round(total/qnt);
  }
}
