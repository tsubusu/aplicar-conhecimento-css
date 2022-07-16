import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SassComponent } from './sass.component';
import { Aula1Component } from './aula1/aula1.component';
import { Aula2Component } from './aula2/aula2.component';

const routes: Routes = [
  { path: '', component: SassComponent },
  { path: 'aula1', component: Aula1Component },
  { path: 'aula2', component: Aula2Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SassRoutingModule { }
