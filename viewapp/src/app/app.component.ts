import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //nombre de la etiqueta raíz que define o agrupa un componente
  templateUrl: './app.component.html',//este conetenido "plantilla" es la parte visual
  styleUrls: ['./app.component.css'] //el estilo de ese componente "trozo de página"
})
export class AppComponent {
  //"LA PARTE FUNCIONAL " "JAVASCRITP", LO QUE DA VIDA AL COMPONENTE
  title = 'APLICACIÓN VIEWAPP';
}
