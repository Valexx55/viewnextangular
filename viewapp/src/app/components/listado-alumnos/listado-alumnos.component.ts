import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { nextTick } from 'process';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.css']
})
export class ListadoAlumnosComponent implements OnInit {

  constructor(private alumnoService:AlumnosService) { }

  ngOnInit(): void {
    this.alumnoService.listarAlumnosDeJSONServer().subscribe
    (
      {
        next: (datos)=>{console.log(datos);}, //caso bueno,
        error: ( error_rx:HttpErrorResponse ) =>
        {
          console.log(`nombre = ${error_rx.name}`);
          console.log(`mensaje = ${error_rx.message}`);
          console.log(`error = ${error_rx.error}`);
          console.log(`ok = ${error_rx.ok}`);
        },
        complete: () => {
          console.log("comunicación completada");
        }

      } 
      
      
    )
  }



}
