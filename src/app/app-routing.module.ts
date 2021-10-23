import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColeccionesComponent } from './components/colecciones/colecciones.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { IndexComponent } from './components/index/index.component';
import { QuienessomosComponent } from './components/quienessomos/quienessomos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';


const routes: Routes = [
  {
    path: "servicios",
    component: ServiciosComponent
  },
 {
    path: "quienessomos",
    component: QuienessomosComponent
  },
  {
    path: "contactenos",
    component: ContactenosComponent
  },
  {
    path: "colecciones",
    component: ColeccionesComponent
  },
  {
    path: "index",
    component: IndexComponent
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "index"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
