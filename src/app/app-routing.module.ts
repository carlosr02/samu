import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { ResumoComponent } from './resumo/resumo.component';
import { DadosComponent } from './dados/dados.component';
import { TodosDadosComponent } from './todos_dados/todos_dados.component';

const routes: Routes = [
  { path: '', redirectTo: 'resumo', pathMatch: 'full' },
  { path: 'resumo', component: ResumoComponent },
  { path: 'dados', component: DadosComponent },
  { path: 'todos_dados', component: TodosDadosComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
