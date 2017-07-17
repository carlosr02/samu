import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { UF } from '../types/uf';
import { UFService } from '../services/uf.service';

import { Dados } from '../types/samu';
import { SamuService } from '../services/samu.service';

@Component({
  selector: 'dados-uf',
  templateUrl: './uf-municipios.component.html',
  styleUrls: ['./uf-municipios.component.css']
})
export class MunicipiosComponent implements OnInit {
  uf: UF;
  municipios_atendidos: Dados[];

  constructor(private route: ActivatedRoute, private location: Location,
    private ufService: UFService, private samuService: SamuService) { }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.ufService.getPorId(+params.get('id')))
      .subscribe(uf => this.uf = uf);
    this.samuService.getPorUFMunicipiosAtendidosPorEstado(this.uf).then(municipios => this.municipios_atendidos = municipios)
  }

  goBack(): void {
    this.location.back();
  }
}
