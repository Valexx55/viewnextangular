import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../models/alumno';
import { AlumnoClase } from '../models/alumnoclase';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private httpcliente:HttpClient) { }

  listarAlumnosDeJSONServer ():Observable<Array<Alumno>>
  {
   return this.httpcliente.get<Array<Alumno>>("http://localhost:3000/alumnos");
  }

  listarAlumnosDeGitHub ():Observable<Array<Alumno>>
  {
   return this.httpcliente.get<Array<Alumno>>("https://my-json-server.typicode.com/valexx55/alumnostardes/alumno");
  }

  crearAlumno (alumno:AlumnoClase):Observable<AlumnoClase>
  {
    return this.httpcliente.post<AlumnoClase>("http://localhost:3000/alumnos", alumno);
  }
}
