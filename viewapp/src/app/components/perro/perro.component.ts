import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { PerroWeb } from 'src/app/models/perro-web';
import { PerroService } from 'src/app/services/perro.service';

@Component({
  selector: 'app-perro',
  templateUrl: './perro.component.html',
  styleUrls: ['./perro.component.css']
})
export class PerroComponent implements OnInit {

  observador_perros:Observer<PerroWeb>;
  perro_recibido!:PerroWeb|null;
//TODO:mostrar la raza
  raza!:string|null;

  constructor(private perroService:PerroService) {
    this.perro_recibido= null;
  this.observador_perros =
  {
    next: (perro_rx:PerroWeb) => {
      console.log('Respuesta OK: ' + perro_rx);
      console.log('foto perro ', perro_rx.message);
      console.log('status ', perro_rx.status);
      this.perro_recibido = perro_rx;
      this.raza = this.perro_recibido.message.split('/')[4];
    },
  error: (error_rx:HttpErrorResponse) => console.error('ERROR en la com: ' + error_rx),
  complete: () => console.log('Comunicación completada'),
  }
}

  ngOnInit(): void {
    //VAMOS A PEDIRLE AL SERIVCIO
    //UN PERRO REMOTO
    this.perroService.damePerro().subscribe(
      this.observador_perros
    );

   /* this.perroService.damePerroConCabeceras().subscribe(
      {
        next: (respuesta:HttpResponse<any>) => {
           this.perro_recibido = <PerroWeb> respuesta.body; //casting - conversion de tipos equivalente 
           this.perro_recibido = respuesta.body as PerroWeb; //casting - conversion de tipos equivalente 
           console.log("TIPO MIME = " + respuesta.headers.get('content-type'));
           console.log("STATUS = " +respuesta.status);
           console.log("STATUS TEXT = " +respuesta.statusText);
         
        },
      error: (error_rx:HttpErrorResponse) => console.error('ERROR en la com: ' + error_rx),
      complete: () => console.log('Comunicación completada'),
      }
    );*/

  }

}
