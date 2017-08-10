import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs';

@Injectable()
export class WeatherService {

  constructor(private _http: Http) { }

  getWeather(city: string) {
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=499c04bf5ac54a014212f4fa02f45714`)
    .map( data => data.json() )
    .toPromise();
  }

}
