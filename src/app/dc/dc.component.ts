import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {
  cityId = 'washington';
  cityJson: any;
  tempF: Number;
  tempC: Number;
  tempHi: Number;
  tempLo: Number;
  meterspersecond: any;
  calculated: Number;

  constructor(private _http: HttpService, private _parent: AppComponent) { }

  ngOnInit() {
    this._parent.homeBgOn = false;
    let obs = this._http.getCityWeather(this.cityId);
    obs.subscribe(data=>{
      this.cityJson = data;
      this.tempF = Math.trunc(((this.cityJson.main.temp-273.15)*1.8)+32);
      this.tempC = Math.trunc(this.cityJson.main.temp-273.15);
      this.tempHi = Math.trunc(((this.cityJson.main.temp_max-273.15)*1.8)+32);
      this.tempLo = Math.trunc(((this.cityJson.main.temp_min-273.15)*1.8)+32);
      this.meterspersecond = this.cityJson.wind.speed;
      this.calculated = Math.round(this.meterspersecond * 3600 / 1610.3*10)/10;
    });
  };

}