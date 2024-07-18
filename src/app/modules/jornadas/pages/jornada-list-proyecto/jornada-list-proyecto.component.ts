import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyect } from 'src/app/models/proyecto';
import { ProyectosService } from 'src/app/modules/proyectos/services/proyectos.service';

@Component({
  selector: 'app-jornada-list-proyecto',
  templateUrl: './jornada-list-proyecto.component.html',
  styleUrls: ['./jornada-list-proyecto.component.css']
})
export class JornadaListProyectoComponent implements OnInit {
  proyectos: Proyect[] = [];
  constructor(private proyectosService: ProyectosService, private router:Router){

  }

  ngOnInit(): void {
    this.listarProyecto();
  }

  listarProyecto() {
    this.proyectosService.listarProyecto().subscribe(
      (data) => {
        console.log(data)
        this.proyectos = data;
      },
      (error) => {
        console.error('Error al obtener la lista de libros', error);
      }
    );
  }

  viewJornadas(id:number){
    this.router.navigate(['/home/jornada/list',id]);
  }

}
