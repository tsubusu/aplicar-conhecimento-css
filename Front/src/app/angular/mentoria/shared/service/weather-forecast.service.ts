import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';
import { WeatherForecast } from '../model/weather-forecast.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {

  public baseUrl: string;
  public headersBanco = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

  constructor(
    private http: HttpClient
    ) {
    this.baseUrl = `${environment.urlAPI}/WeatherForecast`;
  }

  public getWeatherForecast(): Observable<WeatherForecast[]> {
    return this.http.get<WeatherForecast[]>
      (this.baseUrl, { headers: this.headersBanco });
  }
}
