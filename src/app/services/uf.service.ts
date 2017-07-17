import { Injectable } from '@angular/core';

import { UF } from '../types/uf';
import { UFs } from './mock-ufs';

@Injectable()
export class UFService {
  getAll(): Promise<UF[]> {
    return Promise.resolve(UFs);
  }

  getPorId(id: number): Promise<UF> {
    return this.getAll().then(ufs => ufs.find(uf => uf.id === id));
  }
}
