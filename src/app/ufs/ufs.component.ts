import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UF } from '../types/uf';
import { UFService } from '../services/uf.service';

@Component({
  selector: 'my-ufs',
  templateUrl: './ufs.component.html',
  styleUrls: ['./ufs.component.css']
})
export class UFsComponent implements OnInit {
  ufs: UF[];

  constructor(private router: Router, private ufService: UFService) { }

  ngOnInit() : void {
    this.getUFs();
  }

  getUFs() : void {
    this.ufService.getAll().then(ufs => this.ufs = ufs);
  }

  gotoDetail(uf: UF): void {
    this.router.navigate(['/detail', uf.id]);
  }
}
