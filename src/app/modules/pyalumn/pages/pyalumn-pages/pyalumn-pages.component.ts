import { Component } from '@angular/core';
import { Conv } from 'src/app/models/convenio';
import { Escu } from 'src/app/models/escuela';
import { Proyect } from 'src/app/models/proyecto';
import { Semes } from 'src/app/models/semestre';
import { Tipopro } from 'src/app/models/tipoproyecto';
import { PyalumnService } from '../../services/pyalumn.service';

@Component({
  selector: 'app-pyalumn-pages',
  templateUrl: './pyalumn-pages.component.html',
  styleUrls: ['./pyalumn-pages.component.css']
})
export class PyalumnPagesComponent {
  convenios: Conv[] = [];
  escuelas: Escu[] = [];
  semestres: Semes[] = [];
  tipoproyectos: Tipopro[] = [];
  proyectos: any[] = [];
  constructor(private pyService: PyalumnService) { }
  ngOnInit() {
    this.obtenerListas();
    this.listarProyecto();
  }
  obtenerListas() {
    this.pyService.obtenerConvenio().subscribe((data) => {
      this.convenios = data;
    });
    this.pyService.obtenerEscuela().subscribe((data) => {
      this.escuelas = data;
    });
    this.pyService.obtenerSemestre().subscribe((data) => {
      this.semestres = data;
    });
    this.pyService.obtenerTipoProyec().subscribe((data) => {
      this.tipoproyectos = data;
    });
  }
  listarProyecto() {
    this.pyService.listarProyecto().subscribe(
      (data) => {
        console.log(data)
        this.proyectos = data;
      },
      (error) => {
        console.error('Error al obtener la lista de libros', error);
      }
    );
  }
  // //----------------------------------------------------------------------------------------
  obtenerNombreConvenio(id: number): string {
    const convenio = this.convenios.find((a) => a.id === id);
    return convenio ? `${convenio.nombreconvenio}` : '';
  }
  // //----------------------------------------------------------------------------------------
  obtenerNombreCategoria(id: number): string {
    const escuela = this.escuelas.find((c) => c.id === id);
    return escuela ? escuela.nombreea : '';
  }
  // //----------------------------------------------------------------------------------------
  obtenerNombreSemestre(id: number): string {
    const semestre = this.semestres.find((e) => e.id === id);
    return semestre ? semestre.nombresemeste : '';
  }
  // //----------------------------------------------------------------------------------------
  obtenerNombreTipoproyecto(id: number): string {
    const tipoproyecto = this.tipoproyectos.find((e) => e.id === id);
    return tipoproyecto ? tipoproyecto.tipoProyecto : '';
  }
  // //----------------------------------------------------------------------------------------


}
