import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from  './app-routing.module'

import { AppComponent } from './app.component';
import { UFsComponent } from './ufs/ufs.component';
import { UFDetailComponent } from './details/uf-detail.component';
import { MunicipiosComponent } from './municipios/uf-municipios.component';
import { SamuComponent } from './samu/samu.component';

import { UFService } from './services/uf.service';
import { SamuService } from './services/samu.service';

@NgModule({
  declarations: [
    AppComponent,
    UFsComponent,
    UFDetailComponent,
    MunicipiosComponent,
    SamuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ UFService, SamuService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
