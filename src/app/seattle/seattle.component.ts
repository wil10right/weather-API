import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  cityId = 'seattle';
  cityJson: any;
  constructor(private _http: HttpService) { }

  ngOnInit() {
    let obs = this._http.getCityWeather(this.cityId);
    obs.subscribe(data=>{
      console.log(data);
      this.cityJson = data;
    });
  };

}