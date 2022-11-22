import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoClase } from 'src/app/models/alumnoclase';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.css']
})
export class FormularioAlumnoComponent implements OnInit {

  //FORMULARIO PLANTILLA 

  alumno!:AlumnoClase;

  constructor(public alumnoService:AlumnosService, private rutas:Router) {
    this.alumno = new AlumnoClase();
   }

  ngOnInit(): void {
  }

  crearAlumno()
  {
    console.log("Formualrio enviado crearAlumno()");
    this.alumnoService.crearAlumno(this.alumno).subscribe(
      {
        next: (alumno_insertado) => {
          console.log('Alumno insertado ' + alumno_insertado.nombre);
          alert('Alumno insertado ' + alumno_insertado.nombre);
          this.rutas.navigateByUrl('');//ruta relativa
        },
        error: (mensaje_error) => {
          alert('Error en el POST');
        },
        complete: () => {console.log("Completado");},

        
      }
    )
    }

  

  estiloBoton() : string
  {
    let estilo_boton:string = '';

      estilo_boton ='btn btn-primary';

    return estilo_boton;
  }

}
