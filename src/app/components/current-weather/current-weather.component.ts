import { Weather } from './../../models/weather';
import { WeatherService } from './../../services/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})

export class CurrentWeatherComponent implements OnInit {
  cityName: string;

  weathers: Weather[];

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  findCurrentWeather() {
    let temp = [];
    this.weatherService.getCurrentWeather(this.cityName.toLowerCase()).subscribe((data) => {
        temp.push(data);
      });

    this.weathers = temp;
  }
}
