import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CssComponent } from './css.component';
import { RouterModule, Routes } from '@angular/router';
import { Aula1Component } from './aula1/aula1.component';
import { Aula3Component } from './aula3/aula3.component';
import { LayoutResponsivo1Component } from './layout-responsivo1/layout-responsivo1.component';
import { LayoutResponsivoComponentsModule } from './layout-responsivo1/components/layout-responsivo-components.module';
import { Aula2Component } from './aula2/aula2.component';
import { GridComponent } from './grid/grid.component';

const routes: Routes = [
  { path: '', component: CssComponent },
  { path: 'aula1', component: Aula1Component },
  { path: 'aula2', component: Aula2Component },
  { path: 'aula3', component: Aula3Component },
  { path: 'layout1', component: LayoutResponsivo1Component,
    children:[
      { path : 'users', component: Aula1Component }
    ],
  },
  { path: 'grid', component: GridComponent },
];

@NgModule({
  declarations: [CssComponent, Aula1Component, Aula3Component, LayoutResponsivo1Component, Aula2Component, GridComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LayoutResponsivoComponentsModule,
  ]
})
export class CssModule { }
