import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssFlexBoxComponent } from './css-flex-box.component';

const routes: Routes = [
  { path: '', component: CssFlexBoxComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CssFlexBoxRoutingModule { }
