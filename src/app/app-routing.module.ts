import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { UFsComponent } from './ufs/ufs.component';
import { UFDetailComponent } from './details/uf-detail.component';
import { MunicipiosComponent } from './municipios/uf-municipios.component';
import { SamuComponent } from './samu/samu.component'

const routes: Routes = [
  { path: '', redirectTo: 'ufs', pathMatch: 'full' },
  { path: 'ufs',     component: UFsComponent },
  { path: 'detail/:id', component: UFDetailComponent },
  { path: 'municipios/:id', component: MunicipiosComponent },
  { path: 'municipios', component: SamuComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
