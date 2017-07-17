import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';

import { UF } from '../types/uf';
import { UFService } from '../services/uf.service';

import { SamuService } from '../services/samu.service';

@Component({
  selector: 'uf-detail',
  templateUrl: './uf-detail.component.html',
  styleUrls: ['./uf-detail.component.css']
})
export class UFDetailComponent implements OnInit {
  uf: UF;
  media: number;

  constructor(private route: ActivatedRoute, private location: Location,
    private router: Router, private ufService: UFService, private samuService: SamuService) { }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.ufService.getPorId(+params.get('id')))
      .subscribe(uf => this.uf = uf);
    this.media = this.samuService.calcularMedia(this.uf);
  }

  goBack(): void {
    this.location.back();
  }

  verMunicipios(): void {
    this.router.navigate(['/municipios', this.uf.id]);
  }
}
