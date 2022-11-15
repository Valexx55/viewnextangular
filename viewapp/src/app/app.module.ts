import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DniComponent } from './components/dni/dni.component';
import { LayoutModule } from './layout/layout.module';
import { ImcComponent } from './components/imc/imc.component';

@NgModule({
  declarations: [
    AppComponent,
    DniComponent,
    ImcComponent
  ],
  imports: [
    BrowserModule, //aspectos de compatiblidad con navegadores
    AppRoutingModule, //para navegar entre componentes
    FormsModule,//puedo utilizar "facilidades" en formularios
    LayoutModule//cargo mi módulo "personalizado"
  ],
  providers: [],
  bootstrap: [AppComponent]//compoenente inicial
})
export class AppModule { }
