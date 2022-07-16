import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderLayoutResponsivoComponent } from './header-layout-responsivo/header-layout-responsivo.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderLayoutResponsivoComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [HeaderLayoutResponsivoComponent]
})
export class LayoutResponsivoComponentsModule { }
