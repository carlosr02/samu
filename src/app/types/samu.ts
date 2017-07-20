import { UF } from './uf';

export class Dados {
    valor: number;
    uf_id: number;
    ano: number;
}

export class Atendimentos{
  valor: number;
  uf: UF;
  ano: number;

  constructor(valor, uf: UF, ano){
    this.valor = valor;
    this.uf = uf;
    this.ano = ano;
  }
}
