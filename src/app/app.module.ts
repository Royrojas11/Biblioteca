import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { QuienessomosComponent } from './components/quienessomos/quienessomos.component';
import { ColeccionesComponent } from './components/colecciones/colecciones.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { IndexComponent } from './components/index/index.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServiciosComponent,
    QuienessomosComponent,
    ColeccionesComponent,
    ContactenosComponent,
    IndexComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
