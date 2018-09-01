import { Injectable } from '@angular/core';
import { Config } from '../../config/config';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(
    public http: HttpClient
  ) { }

  getMeteoInfo(bearings: string) {
    return new Promise((resolve: any, reject: any) => {
      const url = `${Config.API_URL}/getMeteoInfo`;
      console.log(url);
      const headers: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      });
      const options = {
        headers: headers
      };
      this.http.post(url, bearings, options).subscribe((data: any) => {
        resolve(data);
      }, (err: any) => {
        reject(err.toString());
      });
    });
  }
}
