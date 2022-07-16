import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HtmlComponent } from './html.component';
import { Aula1Component } from './aula1/aula1.component';

const routes: Routes = [
  { path: '', component: HtmlComponent },
  { path: 'aula1', component: Aula1Component }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HtmlModule { }
