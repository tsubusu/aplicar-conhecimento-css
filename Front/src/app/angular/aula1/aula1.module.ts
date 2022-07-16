import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Aula1Component } from './aula1.component';
import { NovaTransferenciaComponent } from './components/nova-transferencia/nova-transferencia.component';
import { FormsModule } from '@angular/forms';
import { ExtratoComponent } from './components/extrato/extrato.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: Aula1Component,
    children: [
      { path : 'transferencia', component: NovaTransferenciaComponent },
      { path : 'extrato', component: ExtratoComponent },
    ],
  },
];

@NgModule({
  declarations: [Aula1Component, NovaTransferenciaComponent, ExtratoComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ]
})
export class Aula1Module { }
