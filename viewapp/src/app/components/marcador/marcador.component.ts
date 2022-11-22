import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-marcador',
  templateUrl: './marcador.component.html',
  styleUrls: ['./marcador.component.css'],
})
export class MarcadorComponent implements OnInit {
  @Input() nombre_jugador: string;

  puntuacion_jugador: number;
  puntuacion_maquina: number;

  @Output() emisorMensajeMarcador: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.nombre_jugador = '';
    this.puntuacion_jugador = 0;
    this.puntuacion_maquina = 0;
  }

  ngOnInit(): void {}

  actualizarMarcador(resultado: number): void {
    //TODO: actualizar el marcador
    let mensaje_resultado:string;

    switch (resultado) {
      case -1:
        this.puntuacion_maquina = this.puntuacion_maquina + 1;
        break;
      case 0:
        this.puntuacion_maquina = this.puntuacion_maquina + 1;
        this.puntuacion_jugador = this.puntuacion_jugador + 1;
        break;
      case 1:
        this.puntuacion_jugador = this.puntuacion_jugador + 1;
        break;
    }

    if (this.puntuacion_maquina>this.puntuacion_jugador)
    {
      mensaje_resultado = "Vas palmando, ánimo";
    } else if (this.puntuacion_jugador>this.puntuacion_maquina)
    {
      mensaje_resultado= "Vas ganando, sigue, champion";
    }
    else {
      mensaje_resultado = "EMPATE!!! intríngulis..."
    }
    this.emisorMensajeMarcador.emit(mensaje_resultado);
  }
}
