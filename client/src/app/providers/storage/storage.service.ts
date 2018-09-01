import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    public localSrv: LocalStorageService
  ) { }

  saveCity(city: any) {
    /**
     * Si no existe el array lo creamos,
     * si existe vamos añadiendo las búsquedas
     */
    let cities: any[] = this.localSrv.get('cities');
    if (!cities) {
      cities = [city];
    } else {
      cities.push(city);
    }
    /**
     * Para acotar el array y que solo aparezcan búsquedas recientes
     * comprobamos la longitud y eliminamos las búsquedas más antiguas.
     * En este caso conservamos las 8 últimas.
     */
    if (cities.length > 8) {
      cities.splice(0, 1);
    }
    this.localSrv.set('cities', cities);
  }

  getCities() {
    let cities: any[] = this.localSrv.get('cities');
    if (!cities) {
      cities = [];
    }
    /**
     * Devolvemos el array en el orden inverso,
     * de esta forma las últimas búsquedas aparecerán al principio de la lista
     */
    return cities.reverse();
  }

  clear() {
    this.localSrv.clear();
  }
}
