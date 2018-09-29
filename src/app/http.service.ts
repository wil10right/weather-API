import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url = 'https://api.openweathermap.org/data/2.5/weather?q=';
  api = ',us&&appid=1257ca04186493c1b0edc5d7ce94acbf'
  constructor(private _http: HttpClient) { }

  getCityWeather(id){
    return this._http.get(this.url+id+this.api)
  }
}
