import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from  './app-routing.module'

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
    AppRoutingModule
  ],
  providers: [ UFService, SamuService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
