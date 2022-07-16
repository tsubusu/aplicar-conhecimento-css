import { Component, OnInit } from '@angular/core';
import { WeatherForecast } from './shared/model/weather-forecast.model';
import { WeatherForecastService } from './shared/service/weather-forecast.service';

@Component({
  selector: 'app-mentoria',
  templateUrl: './mentoria.component.html',
  styleUrls: ['./mentoria.component.scss']
})
export class MentoriaComponent implements OnInit {

  public weather: WeatherForecast[];
  constructor(
    private service: WeatherForecastService
  ) { }

  ngOnInit(): void {
    this.getWeatherForecast();
  }

  getWeatherForecast() {
    this.service.getWeatherForecast().subscribe(x => this.weather = x );
  }
}
