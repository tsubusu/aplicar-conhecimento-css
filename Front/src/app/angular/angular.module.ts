import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularRoutingModule } from './angular-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { Aula1Component } from './aula1/aula1.component';
import { NovaTransferenciaComponent } from './aula1/components/nova-transferencia/nova-transferencia.component';

const routes: Routes = [
  { path: 'mentoria', loadChildren: () => import('./mentoria/mentoria.module').then(m => m.MentoriaModule)},
  { path: 'aula1', loadChildren: () => import('./aula1/aula1.module').then(m => m.Aula1Module)},
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //AngularRoutingModule,
    RouterModule.forChild(routes)
  ]
})
export class AngularModule { }
