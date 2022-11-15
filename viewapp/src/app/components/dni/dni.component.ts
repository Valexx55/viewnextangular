import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dni',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css']
})
export class DniComponent implements OnInit {

  //tipos básicos de TypeScript: string, number y boolean
  //ATRIBUTOS
  titulo:string;
  //Y MÉTODOS

  //DECLARO COmo constante la secuencia A NIVEL DE CLASE
  static readonly SECUENCIA_LETRAS = "TRWAGMYFPDXBNJZSQVHLCKE";

  numero!:number;//not-null operator
  letra:string;

  constructor() { 
    //este método es el primero que se ejecuta
    //inicializo las propiedades/atributos
    //this es la equitequta e//el componente, la instancia
    this.titulo="CALCULE SU LETRA DEL DNI";
    //this.numero=0;
    this.letra='';
    console.log("pasa por el constructor");
  }

  //HAREMOS EL CÁLCULO/LA FUNCIONALIDAD
  ngOnInit(): void {
    console.log("pasa por el ngOnInit()");
  }

  

  calcularLetraDni():void
  {
    console.log("boton calcular tocado " + this.numero);
    let resto:number = this.numero%23;
    console.log("RESTO =  " + resto);
    let letra_resultado: string =  DniComponent.SECUENCIA_LETRAS.charAt(resto);
    console.log(`letra_resultado ${letra_resultado}`);
    this.letra = letra_resultado;

//TODO: mostrar la letra opcionalmente
    //OBTENGO EL NÚMERO
  //LO DIVIDO ENTRE 23
  //Y EL MÓDULO ME DA UN NÚMERO ENTREO 0 Y 22
  //ME AYUDO DE LA TABLA Y OBTENGO ESA LETRA
  }

}
