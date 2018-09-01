import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Config } from '../../config/config';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';

@Injectable({
  providedIn: 'root'
})
export class GeoServiceService {

  constructor(
    public http: HttpClient,
    public localSrv: LocalStorageService
  ) { }

  getGeoInfo(city: string) {
    return new Promise((resolve: any, reject: any) => {
      const url = `${Config.API_URL}/getGeoInfo`;
      console.log(url);
      const headers: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      });
      const options = {
        headers: headers
      };
      this.http.post(url, {city: city}, options).subscribe((data: any) => {
        resolve(data);
      }, (err: any) => {
        reject(err.toString());
      });
    });
  }
}
