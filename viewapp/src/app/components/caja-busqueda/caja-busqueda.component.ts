import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SearchStudentService } from 'src/app/services/search-student.service';

@Component({
  selector: 'app-caja-busqueda',
  templateUrl: './caja-busqueda.component.html',
  styleUrls: ['./caja-busqueda.component.css']
})
export class CajaBusquedaComponent implements OnInit {

  @ViewChild('cajaBusqueda') caja_input!:ElementRef; //ElementRef envolotorio para las etiquetas
  constructor(private searchEvent:SearchStudentService) { }

  ngOnInit(): void {
  }

  busqueda()
  {
    console.log('ha pulsado intro');
    //vamos a ver qué tiene dentro el input
    let caja_busqueda : HTMLInputElement = <HTMLInputElement> this.caja_input.nativeElement;

    let termino_busqueda = this.caja_input.nativeElement.value;
    console.log(`termino de búsqueda = ${termino_busqueda}`);
    console.log(`termino de búsqueda = ${caja_busqueda.value}`);
    this.searchEvent.emitSearchStudentEvent(termino_busqueda);
  }

  /**
   * LISTAR LOS ALUMNOS QUE COINCIDAN CON LA BÚSQUEDA
   * 
   * 1) DEIFNIR EL SERVICIO DE BÚSQUEDAS- get Alumnos de JSON SERVER x
   * 1.1) DEFINIR LA CLASE ALUMNO x
   * 2) DEFINIR OTRO SERVICIO PARA COMUNICAR CajaBusquea con ListadoAlumnos
   * 3) Obtener desde listado de Alumnos, la lista del servicio de búsquedas x
   * 4) Filtrar
   */

}
