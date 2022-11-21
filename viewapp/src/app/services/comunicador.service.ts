import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Evento } from '../models/evento';

@Injectable({
  providedIn: 'root'
})
export class ComunicadorService {

//ÉSTA CLASE SIRVE DE "TUBERÍA" entre LOS Componentes Actividades y Mapa

 private nuevoEventoAComunicar = new Subject<Evento>();//"emisonr del evento"

 observableEvento:Observable<Evento>;
 
  constructor() { 

    this.observableEvento = this.nuevoEventoAComunicar.asObservable();
  }

  comunicarNuevoEventoSeleccionado (evento_seleccionado:Evento)
  {
    this.nuevoEventoAComunicar.next(evento_seleccionado);//"emitimos la señal, de nuevo evento!"
  }
}
