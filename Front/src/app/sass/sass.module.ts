import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SassComponent } from '../sass/sass.component';
import { SassRoutingModule } from '../sass/sass-routing.module';
import { Aula1Component } from './aula1/aula1.component';
import { Aula2Component } from './aula2/aula2.component';

@NgModule({
  declarations: [
    SassComponent,
    Aula1Component,
    Aula2Component,
  ],
  imports: [
    CommonModule,
    SassRoutingModule
  ]
})
export class SassModule { }
