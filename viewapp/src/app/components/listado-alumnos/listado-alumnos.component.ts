import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { nextTick } from 'process';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { SearchStudentService } from 'src/app/services/search-student.service';

@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.css']
})
export class ListadoAlumnosComponent implements OnInit {

  constructor(private alumnoService:AlumnosService, private searchStudentService:SearchStudentService) { 

    this.searchStudentService.searchStudentObservable.subscribe(
      (nombre) => {
        console.log(`Nombre a buscar ... ${nombre}`);
        this.buscarAlumnosEnJsonServerConNombreComo(nombre);
      }
    )
  }

  ngOnInit(): void {
    
  }


  buscarAlumnosEnJsonServerConNombreComo (nombre:string)
  {
    this.alumnoService.listarAlumnosDeJSONServer().subscribe
    (
      {
        next: (datos)=>{
          //RECUPERO LA LISTA ÍNTEGRA DEL SERVIDOR LOCAL
          //TODO: FILTRADO EN BASE AL NOMBRE
          
          console.log(datos);
        }, //caso bueno,
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
