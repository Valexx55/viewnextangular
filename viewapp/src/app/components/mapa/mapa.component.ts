import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit, AfterViewInit {

  constructor() { }
  ngAfterViewInit(): void {
    this.initMap();
  }

  private map!:any;

  ngOnInit(): void {
    //this.initMap();
  }

  private initMap():void{
    this.map = L.map('map', {
      center: [ 40.4355687, -3.691947 ],
      zoom: 11
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }


  encuentrame()
  {
    //vamos a ubicar al usuario con su posición geográfica
    //si existe el api
    if (navigator.geolocation)
    {
      console.log("El api existe en este navegador");
      navigator.geolocation.getCurrentPosition((pos) => {this.exito(pos);} , ()=>{this.fracaso();})
    } else {
      console.log("El api NO existe en este navegador");
      this.fracaso();
    }

    
      //pedir el acceso a la ubicación
    //si no, mostramos un mensajillo de error
  }

  fracaso ()
    {
     alert("No es posbile determinar su ubicación en este dispositivo"); 
    }

    dibujarPosicionEnElMapa (latitud, longitud)
    {
////USO EL API DE LEAFLET //https://leafletjs.com/examples/quick-start/
      let nivel_de_zoom = 12;

      this.map.setView([latitud, longitud], nivel_de_zoom);

      var circle = L.circle([latitud, longitud],
        {
          color: 'blue',
          fillColor: '#000',
          fillOpacity: 0.5,
          radius: 50
        }).addTo(this.map);
    }

    exito (pos:GeolocationPosition)
    {
     //alert("No es posbile determinar su ubicación en este dispositivo"); 
     console.log(` SU POSICIÓN ES latitud ${pos.coords.latitude} longuitud ${pos.coords.longitude}`);
     this.dibujarPosicionEnElMapa(pos.coords.latitude, pos.coords.longitude);

    }

  

}