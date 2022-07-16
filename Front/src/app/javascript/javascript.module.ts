import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Aula1Component } from './aula1/aula1.component';
import { RouterModule, Routes } from '@angular/router';
import { JavascriptComponent } from './javascript.component';

const routes: Routes = [
  { path: '', component: JavascriptComponent },
  { path: 'aula1', component: Aula1Component }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class JavascriptModule { }
