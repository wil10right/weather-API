import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {
  cityId = 'washington';
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