import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Proyect } from 'src/app/models/proyecto';
import { Semes } from 'src/app/models/semestre';
import { EquiposService } from 'src/app/modules/equipos/service/equipos.service';
import { JornadasService } from 'src/app/modules/jornadas/services/jornadas.service';
import { ProyectosService } from 'src/app/modules/proyectos/services/proyectos.service';

@Component({
  selector: 'app-proyecto-informes',
  templateUrl: './proyecto-informes.component.html',
  styleUrls: ['./proyecto-informes.component.css']
})
export class ProyectoInformesComponent implements OnInit {
  proyectos: Proyect[] = [];
  semestres: Semes[] = [];
  jornada:any[]=[];
  _servicejornada= inject(JornadasService)
  ngOnInit(): void {
    this.listarProyecto();
    this.listarJornadas();
  }

  constructor(private proyectosService: ProyectosService
    ,private equiposService: EquiposService, private router:Router) { }
  
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
  async filterSemester($event:Event){
    const valorSeleccionado = ($event.target as HTMLSelectElement).value;
    this.proyectosService.listarProyecto().subscribe(data =>{
      this.proyectos = data.filter(e => e.semestre.id == valorSeleccionado)
    });
  }
  
  viewEquipos(id:number){
    console.log()
    this.router.navigate(['/home/informes/jornadas',id]);
  }









  
}
