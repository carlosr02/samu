import { Injectable } from '@angular/core';

import { UF } from '../types/uf';
import { Dados } from '../types/samu';
import { VALORES } from './mock-samu_municipios_atendidos_por_estado';

@Injectable()
export class SamuService {

  getAllMunicipiosAtendidosPorEstado(): Promise<Dados[]> {
    return Promise.resolve(VALORES);
  }

  getPorUFMunicipiosAtendidosPorEstado(uf: UF): Promise<Dados[]> {
    return this.getAllMunicipiosAtendidosPorEstado()
        .then(municipios => municipios.filter(mun => mun.uf_id === uf.id));
  }

  calcularMedia(uf: UF): Promise<number> {
    var total = 0;
    var qnt = 0;
    return this.getPorUFMunicipiosAtendidosPorEstado(uf)
      .then(municipios => municipios.forEach(function(obj){
        total+=obj.valor;
        qnt++;
      }))
      .then(function(){
        return Math.round(total/qnt);
      });
  }
}
