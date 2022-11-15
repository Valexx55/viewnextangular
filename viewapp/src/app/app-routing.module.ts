import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DniComponent } from './components/dni/dni.component';
import { ImcComponent } from './imc/imc.component';

//este array, mantiene la correspodencia entre
//nombres de rutas y sus componentes
const routes: Routes = [
  {path:"dni", component: DniComponent},
  {path:"imc", component:ImcComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
