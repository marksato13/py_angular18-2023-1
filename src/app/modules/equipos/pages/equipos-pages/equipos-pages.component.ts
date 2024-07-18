import { Component, OnInit } from '@angular/core';
import { Proyect } from 'src/app/models/proyecto';
import { JornadasService } from 'src/app/modules/jornadas/services/jornadas.service';
import { ProyectosService } from 'src/app/modules/proyectos/services/proyectos.service';
import { EquiposService } from '../../service/equipos.service';
import { Jorn } from 'src/app/models/jornada';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipos-pages',
  templateUrl: './equipos-pages.component.html',
  styleUrls: ['./equipos-pages.component.css']
})
export class EquiposPagesComponent implements OnInit {
  proyectos: Proyect[] = [];
  jornada: Jorn[]=[]
  constructor(private router: Router,private proyectosService: ProyectosService,private jornadasService: JornadasService, private equiposService: EquiposService){
  }
  
  ngOnInit(): void {
    this.listarProyecto();
    this.listarJornadas();
  }
  
  listarProyecto() {
    this.proyectosService.listarProyecto().subscribe(
      (data) => {
        this.proyectos = data;
      },
      (error) => {
        console.error('Error al obtener la lista de libros', error);
      }
    );
  }

  listarJornadas() {

    this.equiposService.getJornada().subscribe(
      (data) => {
        this.jornada = data;
        console.log(this.jornada)
      },
      (error) => {
        console.error('Error al obtener la lista de jornada', error);
      }
    );
  }

  viewEquipos(id:number){
    console.log()
    this.router.navigate(['/home/equipo/add/',id]);
  }


}
