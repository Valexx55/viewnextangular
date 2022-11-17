import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PerroWeb } from '../models/perro-web';

//esta clase
//encapusula la comunicación con el servidor remoto
@Injectable({
  providedIn: 'root'
})
export class PerroService {

  //peticion
  //https://dog.ceo/api/breeds/image/random

  static readonly URL_API_PERROS:string = "https://dog.ceo/api/breeds/image/random"

  
//INYECCIÓN DE DEPENCIAS
  constructor(private http:HttpClient) { 
   
  }

  damePerro ():Observable<PerroWeb>
  {
    return this.http.get<PerroWeb>(PerroService.URL_API_PERROS);
    //this.http.get<InfoResuesta>(APIWEB);
  }

  damePerroConCabeceras ():Observable<HttpResponse<any>>
  {
    return this.http.get<PerroWeb>(PerroService.URL_API_PERROS,{ observe: 'response' });
    //this.http.get<InfoResuesta>(APIWEB);
  }
}
