import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProyectosService } from '../../services/proyectos.service';
import { Proyect } from 'src/app/models/proyecto';
import { Conv } from 'src/app/models/convenio';
import { Escu } from 'src/app/models/escuela';
import { Semes } from 'src/app/models/semestre';
import { Tipopro } from 'src/app/models/tipoproyecto';

@Component({
  selector: 'app-view-proyecto',
  templateUrl: './view-proyecto.component.html',
  styleUrls: ['./view-proyecto.component.css']
})
export class ViewProyectoComponent implements OnInit {

  nuevoProyecto: Proyect = new Proyect();
  semestres: Semes[] = [];
  convenios: Conv[] = [];
  file:any;
  imagenSrc:any;
  imgRef:any;
  escuelas: Escu[] = [];
  tipoproyectos: Tipopro[] = [];
  url:string;
  statusUpdate:boolean=false;
  changeImg:boolean=false; // Debes declarar la propiedad acordeonAbierto aquí



  constructor(private proyectosService: ProyectosService) { }
  //----------------------------------------------------------------------------------------


  ngOnInit() {
    this.obtenerListas();
    this.getProyectoOne();
  }

  getProyectoOne(){
    this.proyectosService.viewProyecto.subscribe(data => {
      if(data!=null){
        this.statusUpdate=true;
        this.nuevoProyecto=data;
        this.nuevoProyecto.convenio = data.convenio.id;
        this.nuevoProyecto.tipo_Proyecto = data.tipo_Proyecto.id;
        this.nuevoProyecto.semestre = data.semestre.id;
        this.nuevoProyecto.escuelaProfecional = data.escuelaProfecional.id;
        this.imagenSrc = data.documento;
      }
    })
  }
//----------------------------------------------------------------------------------------
  obtenerListas() {
    this.proyectosService.obtenerConvenio().subscribe((data) => {
      this.convenios = data;
    });
    this.proyectosService.obtenerEscuela().subscribe((data) => {
      this.escuelas = data;
    });
    this.proyectosService.obtenerSemestre().subscribe((data) => {
      console.log(data)
      this.semestres = data;
    });
    this.proyectosService.obtenerTipoProyec().subscribe((data) => {
      this.tipoproyectos = data;
    });
  }
 //----------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------
  obtenerNombreConvenio(id: number): string {
    const convenio = this.convenios.find((a) => a.id === id);
    return convenio ? `${convenio.nombreconvenio}` : '';
  }
//----------------------------------------------------------------------------------------
  obtenerNombreCategoria(id: number): string {
    const escuela = this.escuelas.find((c) => c.id === id);
    return escuela ? escuela.nombreea : '';
  }
//----------------------------------------------------------------------------------------
  obtenerNombreSemestre(id: number): string {
    const semestre = this.semestres.find((e) => e.id === id);
    return semestre ? semestre.nombresemeste : '';
  }
 //----------------------------------------------------------------------------------------
 obtenerNombreTipoproyecto(id: number): string {
  const tipoproyecto = this.tipoproyectos.find((e) => e.id === id);
  return tipoproyecto ? tipoproyecto.tipoProyecto : '';
}
//----------------------------------------------------------------------------------------


}
