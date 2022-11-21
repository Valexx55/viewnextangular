import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private httpcliente:HttpClient) { }

  listarAlumnosDeJSONServer ():Observable<Array<Alumno>>
  {
   return this.httpcliente.get<Array<Alumno>>("http://localhost:3000/alumnos");
  }
}
