import { Component, ElementRef, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { ProyectosService } from '../../services/proyectos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tipopro } from '../../../../models/tipoproyecto';
import { Conv } from 'src/app/models/convenio';
import { Escu } from '../../../../models/escuela';
import { Semes } from 'src/app/models/semestre';
import { Proyect } from 'src/app/models/proyecto';
import Swal from 'sweetalert2';
import { ref, Storage,getDownloadURL,uploadBytes } from '@angular/fire/storage';

@Component({
  selector: 'app-proyectos-pages',
  templateUrl: './proyectos-pages.component.html',
  styleUrls: ['./proyectos-pages.component.css']
})
export class ProyectosPagesComponent {
  @ViewChild('modal') miModal!: ElementRef;
  @ViewChild('close') close!: ElementRef;

  nuevoProyecto: Proyect = new Proyect();
  convenios: Conv[] = [];
  escuelas: Escu[] = [];
  semestres: Semes[] = [];
  tipoproyectos: Tipopro[] = [];
  proyectos: Proyect[] = [];
  idProyectoEliminar: number = 0;
  idProyectoEditar: number = 0;
  file!: any;
  imgRef!: any;
  url!: string;
  isAccordionOpen: boolean[] = [];
  statusSend:boolean;
  update:boolean=false;
  acordeonAbierto = false; 
  estado:number =1;
  // Debes declarar la propiedad acordeonAbierto aquí



  constructor(private proyectosService: ProyectosService,  private stor: Storage) { }

  async filterSemester($event:Event){
    const valorSeleccionado = ($event.target as HTMLSelectElement).value;
    this.proyectosService.listarProyecto().subscribe(data =>{
      this.proyectos = data.filter(e => e.semestre.id == valorSeleccionado)
    });
  }

  viewProyecto(id:number){
    this.estado=2;
    let proyectoUpdate = this.proyectos.find(e => e.id==id);
    this.proyectosService.viewProyecto.next(proyectoUpdate)
  }
  //----------------------------------------------------------------------------------------
  async uploadFile($event: any) {
    this.file = $event.target.files[0];
    this.imgRef = ref(this.stor, `archivosSubidos/${this.file.name}`);
    let urll = await this.insertDocument();
    console.log(urll)
  }

   async insertDocument() {
    return new Promise((resolve, reject) => {
      uploadBytes(this.imgRef, this.file)
        .then(() => {
          const starsRef = ref(this.stor, `archivosSubidos/${this.file.name}`);
          getDownloadURL(starsRef).then((data) => {
            this.url = data;
            resolve(this.url);
            return;
          });
        })
        .catch((error) => console.log(error));
    });
  }

  ngOnInit() {
    this.obtenerListas();
    this.listarProyecto();
    this.getStatusAdd();
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

eliminarProyecto(id: number) {
  console.log(id)
  // Display a confirmation dialog
  Swal.fire({
    title: '¿Estás seguro?',
    text: '¡No podrás revertir esto!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminarlo',
    cancelButtonText: 'Cancelar',
  }).then((result) => {
    // If the user clicks on the confirm button
    if (result.isConfirmed) {
      // Call the service to delete the project
      this.proyectosService.deleteProyecto(id).subscribe(
        () => {
          // On success, display a success message
          Swal.fire(
            '¡Eliminado!',
            'El proyecto ha sido eliminado correctamente.',
            'success'
          );
          // Refresh the list of projects
          this.listarProyecto();
        },
        (error) => {
          // On error, display an error message
          Swal.fire('Error', 'Error al eliminar el proyecto', 'error');
          console.error('Error al eliminar el proyecto', error);
        }
      );
    }
  });
}

updateProyecto(id:number){
  this.estado=1;
  this.update = true;
  let proyectoUpdate = this.proyectos.find(e => e.id==id);
  this.proyectosService.statusUpdate.next(proyectoUpdate)
}

public getStatusAdd(){
  this.proyectosService.statusSend.subscribe(status =>{
    this.statusSend =status;
    if(status){
      this.estado=1;
      const button = this.close.nativeElement as HTMLButtonElement
      button.click()
      console.log(status)
      this.listarProyecto()
    }
  })
}

deleteData(){
  this.estado=1;
  this.proyectosService.statusCloseX.next(true)
}




generateAccordionId(index: number): string {
  return `accordion-${index}`;
}


  // Function to generate unique IDs for accordions

}
