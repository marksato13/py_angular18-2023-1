import { Component, OnInit, inject } from '@angular/core';
import { Conv } from 'src/app/models/convenio';
import { Escu } from 'src/app/models/escuela';
import { Proyect } from 'src/app/models/proyecto';
import { Semes } from 'src/app/models/semestre';
import { Tipopro } from 'src/app/models/tipoproyecto';
import { ProyectosService } from 'src/app/modules/proyectos/services/proyectos.service';
import { ProgramaProyectoService } from '../../service/programa-proyecto.service';
import { JornadasService } from 'src/app/modules/jornadas/services/jornadas.service';
import { Jorn } from 'src/app/models/jornada';

@Component({
  selector: 'app-programa-proyecto',
  templateUrl: './programa-proyecto.component.html',
  styleUrls: ['./programa-proyecto.component.css']
})
export class ProgramaProyectoComponent implements OnInit {
  proyecto:Proyect=new Proyect()
  convenios: Conv[] = [];
  escuelas: Escu[] = [];
  semestres: Semes[] = [];
  facultad: any[]=[];
  jornada:any[]=[];
  tipoproyectos: Tipopro[] = [];
  proyectos: Proyect[]=[];
  jornadaById:any[]=[];
  _service=inject(ProyectosService)
  _serviceProyectoPrograma= inject(ProgramaProyectoService)
  _servicejornada= inject(JornadasService)
  personas:any[]=[];
  ngOnInit(): void {
    this.obtenerListas()
    this.getProyectos()
  }

  async filterSemester($event:Event){
    const valorSeleccionado = ($event.target as HTMLSelectElement).value;
    this._service.listarProyecto().subscribe(data =>{
      this.proyectos = data.filter(e => e.semestre.id == valorSeleccionado)
    });
  }

  async filterEscuela($event:Event){
    const valorSeleccionado = ($event.target as HTMLSelectElement).value;
    this._service.listarProyecto().subscribe(data =>{
      this.proyectos = data.filter(e => e.escuelaProfecional.id == valorSeleccionado)
    });
  }

  async filterFacultad($event:Event){
    const valorSeleccionado = ($event.target as HTMLSelectElement).value;
    this._service.listarProyecto().subscribe(data =>{
      this.proyectos = data.filter(e => e.escuelaProfecional.facultad.id == valorSeleccionado)
    });
  }

  async seacrh($event:Event){
    const valorSeleccionado = ($event.target as HTMLSelectElement).value;
   this._service.listarProyecto().subscribe(data =>{
      this.proyectos = data.filter(e => e.nombreproyecto.includes(valorSeleccionado))
    });
  }


  getProyectos(){
    this._service.listarProyecto().subscribe(data=>{
      this.proyectos=data;
    })
  }

  obtenerListas() {
    this._service.obtenerConvenio().subscribe((data) => {
      this.convenios = data;
    });
    this._service.obtenerEscuela().subscribe((data) => {
      this.escuelas = data;
    });
    this._service.obtenerSemestre().subscribe((data) => {
      this.semestres = data;
    });
    this._service.obtenerTipoProyec().subscribe((data) => {
      this.tipoproyectos = data;
    });

    this._serviceProyectoPrograma.getFacultad().subscribe(data=>{
      this.facultad=data;
    })
  }

  viewDetalle(data:any){
    console.log(data)
    this.proyecto = data;
    this.getJornadas();
  }

  getJornadas(){
    this._servicejornada.listarJornadas(this.proyecto.id).subscribe(data=>{
      this.jornada=data;
      console.log(this.jornada)
      // console.log(this.jornada[1].nombreJornada)
    })
  }

  selecciomar(id:number){
    console.log(id)
    this._serviceProyectoPrograma.getSearchByProyecto(id).subscribe(data =>{
      this.jornadaById = data;
      console.log(this.jornadaById)
    })

    this._serviceProyectoPrograma.getSearchByPersona(id)
    .subscribe(data=>{
      this.personas = data;
    })
  }

}
