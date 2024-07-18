import { Component } from '@angular/core';
import { Opcione } from '../../../../models/opcione';
import { Rolo } from 'src/app/models/rol-opciones';
import { Rol } from 'src/app/models/rol';
import { ConfiService } from '../../services/confi.service';

@Component({
  selector: 'app-confi-pages',
  templateUrl: './confi-pages.component.html',
  styleUrls: ['./confi-pages.component.css']
})
export class ConfiPagesComponent {
  nuevoRolo: Rolo = new Rolo();
  rols: Rol [] = [];
  Opcionez: Opcione [] = [];

  rol_opciones: any[] = [];
  idRol_opcionesEliminar: number = 0;
  idRol_opcionesEditar: number = 0;

  constructor(private confiService: ConfiService) { }

  ngOnInit() {
    this.obtenerListas();
    this.listarRolos();
  }

  obtenerListas() {
    this.confiService.obtenerRol().subscribe((data) => {
      this.rols = data;
    });
    this.confiService.obtenerOpcione().subscribe((data) => {
      this.Opcionez = data;
    });
  }

  agregarRolo() {
    console.log(this.nuevoRolo);
    this.confiService.agregarRolo(this.nuevoRolo).subscribe(
      (data) => {
        console.log('nuevoRolo agregado correctamente', data);
        this.nuevoRolo = new Rolo();
        this.listarRolos();
      },
      (error) => {
        console.error('Error al agregar el convenio', error);
        // Añade manejo de errores específicos aquí si es necesario
      }
    );
  }
  
    
    listarRolos() {
    this.confiService.listarRolos().subscribe(
      (data) => {
        console.log(data)
        this.rol_opciones = data;
      },
      (error) => {
        console.error('Error al obtener la lista de convenio', error);
      }
    );
  }


  obtenerRol(id: number): string {
    const rol = this.rols.find((c) => c.id === id);
    return rol ? rol.nombre_rol : '';
  }

  obtenerOpciones(id: number): string {
    const opcione = this.Opcionez.find((c) => c.id === id);
    return opcione ? opcione.nombre : '';
  }

  eliminarConvenio(id: number) {
    this.confiService.deleteRolo(id).subscribe(
      () => {
        console.log('Convenio eliminado correctamente');
        this.listarRolos();
      },
      (error) => {
        console.error('Error al eliminar el convenio', error);
      }
    );
  }




  }






