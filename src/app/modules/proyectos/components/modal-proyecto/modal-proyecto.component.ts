import { Component, OnInit } from '@angular/core';
import { Conv } from 'src/app/models/convenio';
import { Escu } from 'src/app/models/escuela';
import { Proyect } from 'src/app/models/proyecto';
import { Semes } from 'src/app/models/semestre';
import { Tipopro } from 'src/app/models/tipoproyecto';
import { ProyectosService } from '../../services/proyectos.service';
import { Storage, getDownloadURL, ref, uploadBytes } from '@angular/fire/storage';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-proyecto',
  templateUrl: './modal-proyecto.component.html',
  styleUrls: ['./modal-proyecto.component.css']
})
export class ModalProyectoComponent implements OnInit {
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
  changeImg:boolean=false;
  constructor(private proyectosService: ProyectosService,  private stor: Storage) { }

  ngOnInit(): void {
    this.obtenerListas()
    this.updateReciveId()
    this.closeModalX()
  }

  closeModalX(){
    this.proyectosService.statusCloseX.subscribe(boolean=>{
      if (boolean) {
       this.cancelar()
      }
    })
  }

  updateReciveId(){
    this.proyectosService.statusUpdate.subscribe(data => {
      console.log(data)
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

  async uploadFile($event: any) {
    this.changeImg =true;
    this.file = $event.target.files[0];
    this.imgRef = ref(this.stor, `archivosSubidos/${this.file.name}`);
    if (this.file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        console.log(e.target?.result)
        this.imagenSrc = e.target?.result;
      };

      reader.readAsDataURL(this.file);
    }
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
  async cancelar(){
    await this.proyectosService.statusSend.next(true);
    this.statusUpdate=false;
    this.imagenSrc='';
    this.nuevoProyecto =new Proyect();
  }

  async agregarProyecto() {
    if (Object.values(this.nuevoProyecto).every(value => !value || (typeof value === 'object' && Object.keys(value).length === 0))) {
      Swal.fire('Error', 'Debe rellenar todos los campos', 'error');
    }else{
      this.nuevoProyecto.estado="1";
      if (!this.statusUpdate) {
        delete this.nuevoProyecto.id;
        this.nuevoProyecto.convenio = parseInt(this.nuevoProyecto.convenio)
        this.nuevoProyecto.tipo_Proyecto = parseInt(this.nuevoProyecto.tipo_Proyecto)
        this.nuevoProyecto.semestre = parseInt(this.nuevoProyecto.semestre)
        this.nuevoProyecto.escuelaProfecional = parseInt(this.nuevoProyecto.escuelaProfecional)
        this.nuevoProyecto.documento = await this.insertDocument();   
        this.proyectosService.agregarProyecto(this.nuevoProyecto).subscribe(
          (data) => {
            this.statusUpdate=false;
            this.changeImg=false;
            console.log('Proyecto agregado correctamente');
            this.nuevoProyecto = new Proyect();
            this.imagenSrc = '';
            this.proyectosService.statusSend.next(true);
          },
          (error) => {
          console.error('Error al agregar el Proyecto', error);
          }
        );
      }else{
        let id = this.nuevoProyecto.id;
        delete this.nuevoProyecto.id;
        if (this.changeImg) {
          this.nuevoProyecto.documento = await this.insertDocument(); 
        }
        this.nuevoProyecto.convenio = parseInt(this.nuevoProyecto.convenio)
        this.nuevoProyecto.tipo_Proyecto = parseInt(this.nuevoProyecto.tipo_Proyecto)
        this.nuevoProyecto.semestre = parseInt(this.nuevoProyecto.semestre)
        this.nuevoProyecto.escuelaProfecional = parseInt(this.nuevoProyecto.escuelaProfecional)
        this.proyectosService.updateProyecto(id,this.nuevoProyecto).subscribe(
          (data) => {
            this.statusUpdate=false;
            console.log('Proyecto editado correctamente');
            this.nuevoProyecto = new Proyect();
            this.imagenSrc = '';
            this.proyectosService.statusSend.next(true);
          },
          (error) => {
          console.error('Error al editar el Proyecto', error);
          }
        );
      }
    }
   /* */
  }
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

}
