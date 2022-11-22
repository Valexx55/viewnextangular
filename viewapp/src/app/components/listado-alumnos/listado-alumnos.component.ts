import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { nextTick } from 'process';
import { Alumno } from 'src/app/models/alumno';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { SearchStudentService } from 'src/app/services/search-student.service';
import { ModalAlumnoComponent } from '../modal-alumno/modal-alumno.component';

@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.css']
})
export class ListadoAlumnosComponent implements OnInit {


  lista_alumnos!:Array<Alumno>
  @Input() tiroDeGitHub!:boolean;

  constructor(private alumnoService:AlumnosService, private searchStudentService:SearchStudentService, public dialog:MatDialog) { 

    this.searchStudentService.searchStudentObservable.subscribe(
      (nombre) => {
        console.log(`Nombre a buscar ... ${nombre}`);
        if (this.tiroDeGitHub)
        {
          this.buscarAlumnosEnGitHub(nombre);
        } else {
          this.buscarAlumnosEnJsonServerConNombreComo(nombre);
        }
        
      }
    )
  }

  ngOnInit(): void {
    
  }

  alumnoTocado(alumno:Alumno)
  {
    //TODO: ABRIR EL DIALOGO
    //this.dialog.open();
    this.dialog.open(ModalAlumnoComponent, {data:alumno});
  }

  buscarAlumnosEnJsonServerConNombreComo (termino:string)
  {
    this.alumnoService.listarAlumnosDeJSONServer().subscribe
    (
      {
        next: (datos:Array<Alumno>)=>{
          //RECUPERO LA LISTA ÍNTEGRA DEL SERVIDOR LOCAL
          //TODO: FILTRADO EN BASE AL NOMBRE
          this.lista_alumnos = datos.filter(alumno_aux => { return (alumno_aux.nombre.indexOf(termino)!=-1);});
          this.lista_alumnos.forEach(alumno_aux => {console.log(`${alumno_aux.nombre}`);});
          
          //console.log(datos);
        }, //caso bueno,
        error: ( error_rx:HttpErrorResponse ) =>
        {
          alert("Servicio no disponible");
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

  buscarAlumnosEnGitHub (termino:string)
  {
    this.alumnoService.listarAlumnosDeGitHub().subscribe
    (
      {
        next: (datos:Array<Alumno>)=>{
          //RECUPERO LA LISTA ÍNTEGRA DEL SERVIDOR LOCAL
          //TODO: FILTRADO EN BASE AL NOMBRE
          this.lista_alumnos = datos.filter(alumno_aux => { return (alumno_aux.nombre.indexOf(termino)!=-1);});
          this.lista_alumnos.forEach(alumno_aux => {console.log(`${alumno_aux.nombre}`);});
          
          //console.log(datos);
        }, //caso bueno,
        error: ( error_rx:HttpErrorResponse ) =>
        {
          alert("Servicio no disponible");
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
