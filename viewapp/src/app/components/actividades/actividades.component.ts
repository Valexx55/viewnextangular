import { Component, OnInit } from '@angular/core';
import { MadridService } from 'src/app/services/madrid.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {


  distritos:Array<string>;

  constructor(private servicioMadrid:MadridService) {
    this.distritos = ['ARGANZUELA', 'BARAJAS', 'CARABANCHEL','CENTRO','CHAMARTIN','CHAMBERI', 'CIUDAD LINEAL', 'FUENCARRAL-EL PARDO', 'HORTALEZA', 'LATINA', 'MONCLOA-ARAVACA', 'MORATALAZ', 'PUENTE DE VALLECAS', 'RETIRO', 'SALAMANCA', 'SAN BLAS-CANILLEJAS', 'TETUAN', 'USERA', 'VILLA DE VALLECAS', 'VILLAVERDE' ];
   }

  ngOnInit(): void {
    console.log(this.distritos.length);
  }

  obtenerEventos (distrito_seleccionado:string)
  {
    //TODO: obtenemos los eventos de un distrito
  }
  distritoSeleccionado(evento:Event)
  {
    console.log("distrito seleccionado");
    let elemento_select: HTMLSelectElement = <HTMLSelectElement>evento.target;
    //elemento_select: HTMLSelectElement = evento.target as HTMLSelectElement;

    console.log("distrinto seleccionado = "+elemento_select.value);
    this.obtenerEventos(elemento_select.value);
  }

}
