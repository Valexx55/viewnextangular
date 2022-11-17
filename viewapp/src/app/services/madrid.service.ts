import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


/**
 * ESTA CLASE ME COMUNICA CON EL API REST
 * DEL AYUNTAMIENTO DE MADRID
 * 
 * https://datos.madrid.es/portal/site/egob/menuitem.214413fe61bdd68a53318ba0a8a409a0/?vgnextoid=b07e0f7c5ff9e510VgnVCM1000008a4a900aRCRD&vgnextchannel=b07e0f7c5ff9e510VgnVCM1000008a4a900aRCRD&vgnextfmt=default
 * 
 */
@Injectable({
  providedIn: 'root'
})
export class MadridService {


  private static readonly API_MADRID_EVENTOS:string = "https://datos.madrid.es/egob/catalogo/206974-0-agenda-eventos-culturales-100.json?distrito_nombre=";

  constructor(private http:HttpClient) { }

  public getDistrictEvents(district: string): Observable<any> {
    return this.http.get(MadridService.API_MADRID_EVENTOS + district);
  }
}
