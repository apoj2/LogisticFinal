import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MenuLateralComponent } from './shared/menu-lateral/menu-lateral.component';
import { FormularioRemitenteComponent } from './formulario-registro-mercancia/formulario-remitente/formulario-remitente.component';
import { FormularioDestinatarioComponent } from './formulario-registro-mercancia/formulario-destinatario/formulario-destinatario.component';
import { FormularioFinalComponent } from './formulario-registro-mercancia/formulario-final/formulario-final.component';
import { FormularioDePaquetesComponent } from './formulario-registro-mercancia/formulario-de-paquetes/formulario-de-paquetes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    MenuLateralComponent,
    FormularioRemitenteComponent,
    FormularioDestinatarioComponent,
    FormularioFinalComponent,
    FormularioDePaquetesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
