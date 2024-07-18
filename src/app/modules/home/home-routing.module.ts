import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { ContenidoinicioComponent } from '../inicio/pages/contenidoinicio/contenidoinicio.component';
import { PerfilPagesComponent } from '../perfil/pages/perfil-pages/perfil-pages.component';
import { ProgramaPruectoModule } from '../proyecto-programa/programa-pruecto.module';


const routes: Routes = [
  { path: 'inicio', component: ContenidoinicioComponent },

  { path: 'perfil', component: PerfilPagesComponent },

  {
    path:'convenios',
    loadChildren: ()=> import('../convenios/convenios.module').then((e)=> e.ConveniosModule)
  },

  {
    path:'jornada',
    loadChildren: ()=> import('../jornadas/jornadas.module').then((e)=> e.JornadasModule)
  },

  {
    path:'proyecto',
    loadChildren: ()=> import('../proyectos/proyectos.module').then((e)=> e.ProyectosModule)
  },
  {
    path:'informes',
    loadChildren: ()=> import('../informes/informes.module').then((e)=> e.InformesModule)
  },
  {
    path:'equipo',
    loadChildren: ()=> import('../equipos/equipos.module').then((e)=> e.EquiposModule)
  },
  
  {
    path:'programa-proyecto',
    loadChildren: ()=> import('../proyecto-programa/programa-pruecto.module').then((e)=> e.ProgramaPruectoModule)
  },
  {
    path:'confi',
    loadChildren: ()=> import('../confi/confi.module').then((e)=> e.ConfiModule)
  },
  {
    path:'seguri',
    loadChildren: ()=> import('../seguridad/seguridad.module').then((e)=> e.SeguridadModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
