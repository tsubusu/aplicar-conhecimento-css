import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentoriaComponent } from './mentoria.component';
import { MentoriaRoutingModule } from './mentoria-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { WeatherForecastService } from './shared/service/weather-forecast.service';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: MentoriaComponent },
];

@NgModule({
  declarations: [MentoriaComponent],
  imports: [
    CommonModule,
    //MentoriaRoutingModule,s
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
  ],
  providers: [
    WeatherForecastService
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class MentoriaModule { }
