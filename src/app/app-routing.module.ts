import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioFinalComponent } from './formulario-registro-mercancia/formulario-final/formulario-final.component';
import { FormularioRemitenteComponent } from './formulario-registro-mercancia/formulario-remitente/formulario-remitente.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"",component:HomeComponent,pathMatch:"full"},
  {path:"formulario",component:FormularioFinalComponent},
  {path:"formularioR",component:FormularioRemitenteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
