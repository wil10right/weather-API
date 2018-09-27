import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  cityId = 'burbank';
  cityJson: any;
  tempF: Number;
  tempC: Number;
  tempHi: Number;
  tempLo: Number;
  meterspersecond: any;
  calculated: Number;
  constructor(private _http: HttpService) { }

  ngOnInit() {
    let obs = this._http.getCityWeather(this.cityId);
    obs.subscribe(data=>{
      console.log(data);
      this.cityJson = data;
      console.log(this.cityJson.main.temp);

      this.tempF = Math.trunc(((this.cityJson.main.temp-273.15)*1.8)+32);
      this.tempC = Math.trunc(this.cityJson.main.temp-273.15);
      this.tempHi = Math.trunc(((this.cityJson.main.temp_max-273.15)*1.8)+32);
      this.tempLo = Math.trunc(((this.cityJson.main.temp_min-273.15)*1.8)+32);
      this.meterspersecond = this.cityJson.wind.speed;
      this.calculated = Math.round(this.meterspersecond * 3600 / 1610.3*10)/10;
      console.log(this.tempF);

    });
  };

}
