import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DniComponent } from './components/dni/dni.component';
import { LayoutModule } from './layout/layout.module';
import { ImcComponent } from './components/imc/imc.component';
import { PerroComponent } from './components/perro/perro.component';
import {HttpClientModule} from '@angular/common/http';
import { OcioComponent } from './components/ocio/ocio.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { BusquedaAlumnoComponent } from './components/busqueda-alumno/busqueda-alumno.component';
import { CajaBusquedaComponent } from './components/caja-busqueda/caja-busqueda.component';
import { ListadoAlumnosComponent } from './components/listado-alumnos/listado-alumnos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalAlumnoComponent } from './components/modal-alumno/modal-alumno.component';
import { JuegoPptComponent } from './components/juego-ppt/juego-ppt.component';
import { MarcadorComponent } from './components/marcador/marcador.component';
import { FormularioAlumnoComponent } from './components/formulario-alumno/formulario-alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    DniComponent,
    ImcComponent,
    PerroComponent,
    OcioComponent,
    MapaComponent,
    ActividadesComponent,
    BusquedaAlumnoComponent,
    CajaBusquedaComponent,
    ListadoAlumnosComponent,
    ModalAlumnoComponent,
    JuegoPptComponent,
    MarcadorComponent,
    FormularioAlumnoComponent
  ],
  imports: [
    BrowserModule, //aspectos de compatiblidad con navegadores
    AppRoutingModule, //para navegar entre componentes
    FormsModule,//puedo utilizar "facilidades" en formularios
    LayoutModule,//cargo mi m??dulo "personalizado"
    HttpClientModule, BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]//compoenente inicial
})
export class AppModule { }
