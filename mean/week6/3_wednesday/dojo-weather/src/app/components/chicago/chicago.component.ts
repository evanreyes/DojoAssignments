import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../weather.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css'],
})
export class ChicagoComponent implements OnInit {
  weather;
  temp;
  high_temp;
  low_temp;
  humidity;
  status;
  wind_speed;
  wind_direction;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this.weather = this._weatherService.getWeather('chicago')
    .then( weather => {
      this.humidity = weather.main.humidity;
      this.temp = weather.main.temp;
      this.high_temp = weather.main.temp_max;
      this.low_temp = weather.main.temp_min;
      this.status = weather.weather[0].main;
      this.wind_speed = weather.wind.speed;
      this.wind_direction = weather.wind.deg;
    });
  }

}
