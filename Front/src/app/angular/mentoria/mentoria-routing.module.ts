import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MentoriaComponent } from './mentoria.component';

const routes: Routes = [
  { path: '', component: MentoriaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MentoriaRoutingModule { }
