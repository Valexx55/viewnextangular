import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaAlumnoComponent } from './components/busqueda-alumno/busqueda-alumno.component';
import { DniComponent } from './components/dni/dni.component';
import { ImcComponent } from './components/imc/imc.component';
import { JuegoPptComponent } from './components/juego-ppt/juego-ppt.component';
import { OcioComponent } from './components/ocio/ocio.component';
import { PerroComponent } from './components/perro/perro.component';

//este array, mantiene la correspodencia entre
//nombres de rutas y sus componentes
const routes: Routes = [
  {path:"dni", component: DniComponent},
  {path:"imc", component:ImcComponent},
  {path:"perro", component: PerroComponent},
  {path:"ocio", component: OcioComponent},//ocio mapas
  {path:"buscar", component: BusquedaAlumnoComponent},//buscador
  {path:"juegoppt", component: JuegoPptComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
