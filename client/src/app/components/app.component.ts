import { Component, OnInit } from '@angular/core';
import { GeoServiceService } from '../providers/geo-service/geo-service.service';
import { MatSnackBar } from '@angular/material';
import { MeteoService } from '../providers/meteo-service/meteo-service.service';
import { StorageService } from './../providers/storage/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  city = '';
  info: any = {};
  meteoInfo: any = {};
  cities: string[] = [];
  loading = false;
  /**
   * Con esta variable auxiliar evitamos que en el título de la lista veamos lo que estamos escribiendo en el input
   * y salga el nombre de la última ciudad que hemos buscado
   */
  lastCity = '';

  constructor(
    public geoSrv: GeoServiceService,
    public snackBar: MatSnackBar,
    public meteoSrv: MeteoService,
    public storage: StorageService
  ) {}

  ngOnInit() {
    this.cities = this.storage.getCities();
  }

  setCity(city) {
    if (!this.loading) {
      this.city = city;
      this.getGeoInfo();
    }
  }


  async getGeoInfo() {
    if (!this.loading) {
      try {
        console.log(this.city);
        this.lastCity = this.city;
        if (this.city === '') {
          this.snackBar.open('El campo ciudad no puede estar vacío', '', {
            duration: 1500,
            verticalPosition: 'top',
            horizontalPosition: 'right'
          });
        } else {
          this.loading = true;
          this.cities = this.storage.getCities();
          this.info = await this.geoSrv.getGeoInfo(this.city);
          console.log(Object.keys(this.info).length);
          if (Object.keys(this.info).length === 0) {
            this.snackBar.open('No se han encontrado resultados', '', {
              duration: 1500,
              verticalPosition: 'top',
              horizontalPosition: 'right'
            });
          }
          console.log(this.info);
          if (this.info.bearings) {
            this.meteoInfo = await this.meteoSrv.getMeteoInfo(this.info.bearings);
            console.log(this.meteoInfo);
          }
          this.loading = false;
        }
      } catch (err) {
        this.city = '';
        this.lastCity = '';
        this.info = {};
        this.meteoInfo = {};
        this.loading = false;
        console.error(err);
      }
    }
  }

  async checkSearhc(keyCode: number) {
    if (keyCode === 13) {
      this.storage.saveCity(this.city);
      await this.getGeoInfo();
    }
  }

  async clearCities() {
    try {
      this.storage.clear();
      this.cities = [];
      this.city = '';
      this.lastCity = '';
      this.info = {};
      this.meteoInfo = {};
    } catch (err) {
      console.error(err);
    }
  }
}
