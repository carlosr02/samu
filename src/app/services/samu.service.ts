import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { UF } from '../types/uf';
import { Dados } from '../types/samu';
import { Atendimentos } from '../types/samu';

import { UFService } from '../services/uf.service';

@Injectable()
export class SamuService {
  private samuUrl = 'https://samu.restlet.net/v1/valores/samu.json';

  constructor(private http: Http, private ufService: UFService){ }

  getAllMunicipiosAtendidosPorEstado(): Promise<Dados[]> {
    return this.http.get(this.samuUrl)
               .toPromise()
               .then(response => response.json().valores as Dados[]);
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  getPorUFMunicipiosAtendidosPorEstado(uf: UF): Promise<Dados[]> {
    return this.getAllMunicipiosAtendidosPorEstado()
        .then(municipios => municipios.filter(mun => mun.estado_ibge === uf.id));
  }

  getAllMunicipiosAtendidosPorEstadoComNome(): Promise<Atendimentos[]> {
    let atendimentos: Atendimentos[] = [];

    this.getAllMunicipiosAtendidosPorEstado()
      .then(municipios => municipios
        .forEach(municipio =>
          this.ufService.getPorId(municipio.estado_ibge).then(uf =>
            atendimentos.push(new Atendimentos(municipio.valor, uf, municipio.ano)))
          )
        );

    return Promise.resolve(atendimentos);
  }
}
