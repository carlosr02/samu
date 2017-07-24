import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';


import { AppRoutingModule } from  './app-routing.module'

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-uf-api.service';

import { AppComponent } from './app.component';
import { ResumoComponent } from './resumo/resumo.component';
import { DadosComponent } from './dados/dados.component';
import { TodosDadosComponent } from './todos_dados/todos_dados.component';

import { UFService } from './services/uf.service';
import { SamuService } from './services/samu.service';

@NgModule({
  declarations: [
    AppComponent,
    ResumoComponent,
    DadosComponent,
    TodosDadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [ UFService, SamuService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
