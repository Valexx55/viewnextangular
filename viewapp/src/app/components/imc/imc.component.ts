import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Imc } from 'src/app/models/imc';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {

  peso!: number;
  estatura!: number;
  /*imc!: number;
  imagen!:string;
  estado!:string;//delgado, desnutrido, etc.*/
  array_imcs:Array<Imc>;

  oimc!:Imc|null;
  //oimc!:Imc|string;


  constructor() { 
    this.oimc = null;
    this.array_imcs=new Array<Imc>();//inicializo el array
  }

  ngOnInit(): void {
    console.log(`ngOnChanges PESO = ${this.peso}` );
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
    console.log(`ngOnChanges PESO = ${this.peso}` );
  }

 
  mostrarImc (imc_aux:Imc)
  {
    console.log(`peso = ${imc_aux.peso} estatura = ${imc_aux.estatura} imc = ${imc_aux.imc}`);
    this.estatura;
  }


  mostrarArrayImcs (lista_imcs : Array<Imc>)
  {

    let imc_aux: Imc;
    for (let i=0; i<lista_imcs.length;i++)
    {
       imc_aux = lista_imcs[i];
       console.log(`peso = ${imc_aux.peso} estatura = ${imc_aux.estatura} imc = ${imc_aux.imc}`);
    }

    //TODO:recorrer la lista Y LA MUESTRo por consola
    lista_imcs.forEach(  (imc_actual:Imc) => {
      
      console.log(`peso = ${imc_actual.peso}`);
    } );

    lista_imcs.forEach(this.mostrarImc);
  }

  calcularIMC():void {


    this.oimc =  new Imc(this.peso, this.estatura);
    this.array_imcs.push(this.oimc);
    this.mostrarArrayImcs(this.array_imcs);
    
  }
}
