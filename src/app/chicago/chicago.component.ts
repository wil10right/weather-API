import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  cityId = 'chicago';
  cityJson:any;
  constructor(private _http: HttpService) { }

  ngOnInit() {
    let obs = this._http.getCityWeather(this.cityId);
    obs.subscribe(data=>{
      console.log(data);
      this.cityJson = data;
    });
  };

}