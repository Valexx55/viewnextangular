import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenusuperiorComponent } from './menusuperior/menusuperior.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    MenusuperiorComponent //este Componente pertence a este módulo, pero es "privado"
  ],
  imports: [
    CommonModule,
    AppRoutingModule//VITAL para que funcione la navegación- DENTRO DE ESTE MÓDULO, ESTAMOS USANDO DIRECTIVAS DE ÉSTE
  ],
  exports: [
    MenusuperiorComponent //declarado aquí, el COmpoente se puede usar fuera de otro módulo
  ]
})
export class LayoutModule { }
