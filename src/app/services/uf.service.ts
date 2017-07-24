import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { UF } from '../types/uf';

@Injectable()
export class UFService {
  private ufsUrl = 'api/ufs';

  constructor(private http: Http) { }

  getAll(): Promise<UF[]> {
    return this.http.get(this.ufsUrl)
               .toPromise()
               .then(response => response.json().data as UF[]);
  }

  getPorId(id: number): Promise<UF> {
    return this.getAll().then(ufs => ufs.find(uf => uf.id === id));
  }
}
