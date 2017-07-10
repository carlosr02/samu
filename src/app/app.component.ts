import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service'

import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UFService, SamuService]
})
export class AppComponent implements OnInit {
    uf_id = 13;
    uf: UF;
    municipios_atendidos: Dados[];
    media: number;

    constructor(private ufService: UFService, private samuService: SamuService)
    {

    }

    ngOnInit(): void {
        this.uf = this.ufService.getById(this.uf_id);
        this.municipios_atendidos = this.samuService.getoMunicipiosAtendidosDoEstado(this.uf_id);
        this.media = this.calcularMedia();
    }

    calcularMedia(): number {
      var total = 0;
      for(let mun of this.municipios_atendidos){
        total+=mun.valor;
      }
      return Math.round(total/this.municipios_atendidos.length);
    }
}
