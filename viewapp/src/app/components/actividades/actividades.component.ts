import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { Evento } from 'src/app/models/evento';
import { MadridService } from 'src/app/services/madrid.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {


  distritos:Array<string>;
  //public madridActivitites?: any[];
  public madridActivitites?: Array<Evento>;
  private districtObserver: Observer<any>;

  constructor(private servicioMadrid:MadridService) {
    this.distritos = ['ARGANZUELA', 'BARAJAS', 'CARABANCHEL','CENTRO','CHAMARTIN','CHAMBERI', 'CIUDAD LINEAL', 'FUENCARRAL-EL PARDO', 'HORTALEZA', 'LATINA', 'MONCLOA-ARAVACA', 'MORATALAZ', 'PUENTE DE VALLECAS', 'RETIRO', 'SALAMANCA', 'SAN BLAS-CANILLEJAS', 'TETUAN', 'USERA', 'VILLA DE VALLECAS', 'VILLAVERDE' ];
    this.districtObserver = {
      next: (districtObserver: any) => {
        console.log('Repsuesta distrito recibido', districtObserver);
        //districtObserver.@graph//como no puedo acceder así,
        this.madridActivitites = <Array<Evento>> districtObserver['@graph'];//ojo con la forma de accesso alternativa
        this.madridActivitites.forEach(
          (evento_actual:Evento) => 
          {
            console.log(`TITULO =  ${evento_actual.title}` );
            console.log(`LATITUD =  ${evento_actual.location.latitude}` );
            console.log(`LONGITUD =  ${evento_actual.location.longitude}` );
          }
        )
      },
      error: (error: HttpErrorResponse) =>
        console.error('Error al recibir el distrito', error),
      complete: () => console.log('Completado llamada a distrito'),
    };
   }

  ngOnInit(): void {
    console.log(this.distritos.length);
  }

  obtenerEventos (distrito_seleccionado:string)
  {
    //TODO: obtenemos los eventos de un distrito
    this.servicioMadrid
    .getDistrictEvents(distrito_seleccionado)
    .subscribe(this.districtObserver);
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
