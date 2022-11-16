import {
  AfterViewInit,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Imc } from 'src/app/models/imc';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css'],
})
export class ImcComponent
  implements OnInit, OnChanges, OnDestroy, AfterViewInit
{
  peso!: number;
  estatura!: number;
  /*imc!: number;
  imagen!:string;
  estado!:string;//delgado, desnutrido, etc.*/
  array_imcs: Array<Imc>;

  oimc!: Imc | null;
  //oimc!:Imc|string;

  constructor() {
    this.oimc = null;
    this.array_imcs = new Array<Imc>(); //inicializo el array
  }

  ngOnInit(): void {
    console.log(`ngOnChanges PESO = ${this.peso}`);
  }

  ngAfterViewInit(): void {
    //este método se invoca cuando se ha procesado la plantilla
    console.log('ngAfterViewInit');
  }
  ngOnDestroy(): void {
    //navego a otro compoennte
    console.log('ngOnDestroy');
  }
  ngOnChanges(changes: SimpleChanges): void {
    //throw new Error('Method not implemented.');
    //FUNCIONA CON @Input
    console.log(`ngOnChanges PESO = ${this.peso}`);
  }

  mostrarImc(imc_aux: Imc) {
    console.log(
      `peso = ${imc_aux.peso} estatura = ${imc_aux.estatura} imc = ${imc_aux.imc}`
    );
    //this.estatura;//no es el componte, this.estautra indefinido
  }

  mostrarArrayImcs(lista_imcs: Array<Imc>) {
    let imc_aux: Imc;
    //versión clásica
    /*for (let i = 0; i < lista_imcs.length; i++) {
      imc_aux = lista_imcs[i];
      console.log(
        `peso = ${imc_aux.peso} estatura = ${imc_aux.estatura} imc = ${imc_aux.imc}`
      );
    }*/

    //funcion flecha, lambda, función anónimo, arrow
    lista_imcs.forEach((imc_actual: Imc) => {
      console.log(`peso = ${imc_actual.peso}`);
    });

    //funcion con nombre -- problema del this -- fallaría tal y como está.
    //lista_imcs.forEach(this.mostrarImc);
  }

  //Para practicar con programación funcional, vamos a hacer
  //los siguientes métodos usando esta técnica

  //1 OBTENER LA MEDIA DEL PESO
  obtenerMediaPeso(lista_imcs: Array<Imc>): number {
    let media: number = 0;
    let sumatorio: number = 0;

      lista_imcs.forEach((imc) => {
        sumatorio = sumatorio + imc.peso;
      });

      media = sumatorio / lista_imcs.length;

    return media;
  }
  //2 OBTENER LA MEDIA DEL altura

  obtenerMediaAltura(lista_imcs: Array<Imc>): number {
    let media: number = 0;
    let sumatorio: number = 0;

      lista_imcs.forEach((imc) => {
        sumatorio = sumatorio + imc.estatura;
      });

      media = sumatorio / lista_imcs.length;

    return media;
  }


  getMaxImc(imcList: Array<Imc>): number {
    let maxImc: number = 0;

      imcList.forEach(imcItem => {
        maxImc = maxImc <= imcItem.imc ? imcItem.imc : maxImc;
      });

    return maxImc;
  }
  
  sumar1KgIMC():void{

    this.array_imcs = this.array_imcs.map((imc_nuevo) => {
      imc_nuevo.peso =  imc_nuevo.peso +1;
      return imc_nuevo
   });
  }
  
  obtenerObesos (lista_imcs : Array<Imc>):Array<Imc> {
    let lista_obesos:Array<Imc>;

      lista_obesos = lista_imcs.filter(imc => imc.estado == 'obeso');

    return lista_obesos;
  }

  //3 obtener el imc MÁXIMO
  //4 FILTRAR los OBESOS
  //5 SUMAR 1KG  a todos los registros

  calcularIMC(): void {
    // if (this.)
    this.oimc = new Imc(this.peso, this.estatura);
    this.array_imcs.push(this.oimc);
    let media_peso:number = this.obtenerMediaPeso(this.array_imcs);
    let media_altura:number = this.obtenerMediaAltura(this.array_imcs);
    let maximo_imc = this.getMaxImc(this.array_imcs);
    console.log(`media Peso = ${media_peso} media Alura = ${media_altura} maximo = ${maximo_imc}`);
    this.sumar1KgIMC();
    this.mostrarArrayImcs(this.array_imcs);
  }

  limpiarFormulario(): void {
    this.array_imcs.splice(0, this.array_imcs.length);
    //this.array_imcs.length=0;
    this.peso = 0;
    this.estatura = 0;
    this.oimc = null;
  }
  ordenarPorImc ()
  {
    this.array_imcs.sort((imc1:Imc, imc2:Imc) =>
    {
      let resultado = 0;

        //resultado = imc1.imc - imc2.imc;//ordeno de menor a mayor ASC
        resultado = imc2.imc - imc1.imc; //ordenado de mayor a menor DESC
        /*if (imc1.imc>imc2.imc)
        {
          resultado = 10;
        } else if (imc1.imc<imc2.imc)
        {
          resultado = -10;
        } *//*else 
        {
          resultado = 0;//si son iguales
        }*/

      return resultado;
    });
  }
}
