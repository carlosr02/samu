import { Injectable } from '@angular/core';

import { UF } from '../types/uf';
import { Dados } from '../types/samu';
import { Atendimentos } from '../types/samu';

import { UFService } from '../services/uf.service';

import { VALORES } from './mock-samu_municipios_atendidos_por_estado';

@Injectable()
export class SamuService {

  constructor(private ufService: UFService){ }

  getAllMunicipiosAtendidosPorEstado(): Promise<Dados[]> {
    return Promise.resolve(VALORES);
  }

  getPorUFMunicipiosAtendidosPorEstado(uf: UF): Promise<Dados[]> {
    return this.getAllMunicipiosAtendidosPorEstado()
        .then(municipios => municipios.filter(mun => mun.uf_id === uf.id));
  }

  getAllMunicipiosAtendidosPorEstadoComNome(): Promise<Atendimentos[]> {
    let atendimentos: Atendimentos[] = [];
    let unidade_federativa: UF;

    this.getAllMunicipiosAtendidosPorEstado()
      .then(municipios => municipios
        .forEach(municipio => atendimentos.push(
          new Atendimentos(
            municipio.valor,
            this.ufService.getPorId(municipio.uf_id),
            municipio.ano
          ))));

      return Promise.resolve(atendimentos);
  }
}
