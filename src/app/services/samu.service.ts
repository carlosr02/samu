import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { UF } from '../types/uf';
import { Dados } from '../types/samu';
import { Atendimentos } from '../types/samu';

import { UFService } from '../services/uf.service';

@Injectable()
export class SamuService {
  // private samuUrl = 'https://crossorigin.me/http://api.pgi.gov.br/api/1/serie/27.json';
  private samuUrl = '/api/valores'

  constructor(private http: Http, private ufService: UFService){ }

  getAllMunicipiosAtendidosPorEstado(): Promise<Dados[]> {
    return this.http.get(this.samuUrl)
               .toPromise()
               .then(response => response.json().data as Dados[]);
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  getPorUFMunicipiosAtendidosPorEstado(uf: UF): Promise<Dados[]> {
    return this.getAllMunicipiosAtendidosPorEstado()
        .then(municipios => municipios.filter(mun => mun.uf_id === uf.id));
  }

  getAllMunicipiosAtendidosPorEstadoComNome(): Promise<Atendimentos[]> {
    let atendimentos: Atendimentos[] = [];

    this.getAllMunicipiosAtendidosPorEstado()
      .then(municipios => municipios
        .forEach(municipio =>
          this.ufService.getPorId(municipio.uf_id).then(uf =>
            atendimentos.push(new Atendimentos(municipio.valor, uf, municipio.ano)))
        )
      );

    return Promise.resolve(atendimentos);
  }
}
