import { Component, OnInit } from '@angular/core';
import { MadridService } from 'src/app/services/madrid.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {

  constructor(private servicioMadrid:MadridService) { }

  ngOnInit(): void {
    
  }

  obtenerEventos ()
  {
    //TODO: obtenemos los eventos de un distrito
  }

}
