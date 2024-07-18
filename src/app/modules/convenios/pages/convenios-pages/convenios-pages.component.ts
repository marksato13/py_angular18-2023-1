import { Component } from '@angular/core';
import { ConveniosService } from '../../services/convenios.service';
import Swal from 'sweetalert2';
import { Tipocom } from 'src/app/models/tipoconvenio';
import { Conve } from 'src/app/models/conveni';

@Component({
  selector: 'app-convenios-pages',
  templateUrl: './convenios-pages.component.html',
  styleUrls: ['./convenios-pages.component.css']
})
export class ConveniosPagesComponent {
  nuevoConvenio: Conve = new Conve();
  tipoconvenios: Tipocom [] = [];
  convenios: any[] = [];
  idConvenioEliminar: number = 0;
  idConvenioEditar: number = 0;

  constructor(private conveniosService: ConveniosService) { }

  ngOnInit() {
    this.obtenerListas();
    this.listarConvenios();
  }

  obtenerListas() {
    this.conveniosService.obtenerTipocomvenio().subscribe((data) => {
      this.tipoconvenios = data;
    });
  }



  agregarConvenio() {
    console.log(this.nuevoConvenio)
    this.conveniosService.agregarConvenio(this.nuevoConvenio).subscribe(
      (data) => {
        console.log('Libro agregado correctamente', data);
        this.nuevoConvenio = new Conve();
        this.listarConvenios(); // Llama a listarLibros() después de agregar un libro
      },
      (error) => {
        console.error('Error al agregar el convenio', error);
      }
    );
  }

  listarConvenios() {
    this.conveniosService.listarConvenios().subscribe(
      (data) => {
        console.log(data)
        this.convenios = data;
      },
      (error) => {
        console.error('Error al obtener la lista de convenio', error);
      }
    );
  }

  obtenerTipoconvenio(id: number): string {
    const tipoconvenio = this.tipoconvenios.find((c) => c.id === id);
    return tipoconvenio ? tipoconvenio.nombretipoconvenio : '';
  }

  eliminarConvenio(id: number) {
    this.conveniosService.deleteConvenio(id).subscribe(
      () => {
        console.log('Convenio eliminado correctamente');
        this.listarConvenios();
      },
      (error) => {
        console.error('Error al eliminar el convenio', error);
      }
    );
  }
}
