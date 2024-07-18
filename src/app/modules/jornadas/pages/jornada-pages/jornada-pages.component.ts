import { Component, OnInit } from '@angular/core';
import { Jorn } from 'src/app/models/jornada';
import { Proyect } from 'src/app/models/proyecto';
import { JornadasService } from '../../services/jornadas.service';
import { Proyecti } from 'src/app/models/proye';
import { ActivatedRoute } from '@angular/router';
import { Storage, getDownloadURL, ref, uploadBytes } from '@angular/fire/storage';

@Component({
  selector: 'app-jornada-pages',
  templateUrl: './jornada-pages.component.html',
  styleUrls: ['./jornada-pages.component.css']
})
export class JornadaPagesComponent implements OnInit {
  file:any;
  url:any;
  imagenSrc:any;
  imgRef:any;
  textButton:string='Agregar Jornada'
  nuevoJornada: Jorn = new Jorn();
  proyectos: Proyecti[] = [];
  jornadas: any[] = [];
  id:number;
  status:boolean=false;
  statusFileInput:boolean=false;
  idJornadaEliminar: number = 0;
  idJornadaEditar: number = 0;
  
  constructor(private jornadasService: JornadasService,private route: ActivatedRoute, private stor: Storage) { }
  //----------------------------------------------------------------------------------------
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = parseInt(params['id']);
    });
    this.obtenerListas();
    this.listarJornadas();
  }

  async uploadFile($event: any) {
    this.file = $event.target.files[0];
    this.imgRef = ref(this.stor, `archivosSubidos/${this.file.name}`);
    if (this.file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        console.log(e.target?.result)
        this.imagenSrc = e.target?.result;
        this.statusFileInput=true;
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
//----------------------------------------------------------------------------------------
  obtenerListas() {
    this.jornadasService.obtenerProyecto().subscribe((data) => {
      this.proyectos = data;
    });
  }
//----------------------------------------------------------------------------------------
async agregarJornada() {
  console.log(this.status)
  if (this.status) {
    const id = this.nuevoJornada.id;
    console.log(this.nuevoJornada);
    delete this.nuevoJornada.id;
    if (this.statusFileInput) {
      this.nuevoJornada.url = await this.insertDocument();
    }
    this.textButton= 'Agregar Jornada'
    this.jornadasService.editarJornada(id, this.nuevoJornada).subscribe(res =>{
      console.log(res)
      this.statusFileInput=false;
      this.nuevoJornada = new Jorn();
      this.imagenSrc='';
      this.listarJornadas();
    })
  }else{
    this.nuevoJornada.url = await this.insertDocument(); 
    this.nuevoJornada.proyecto=this.id;
    delete this.nuevoJornada.id;
    this.jornadasService.agregarJornada(this.nuevoJornada).subscribe(
      (data) => {
        this.statusFileInput=false;
        console.log('Proyecto agregado correctamente', data);
        this.nuevoJornada = new Jorn();
        this.imagenSrc='';
        this.listarJornadas(); 
      },
      (error) => {
        console.error('Error al agregar el jornada', error);
      }
    );
  }
}
 //----------------------------------------------------------------------------------------
 listarJornadas() {

    this.jornadasService.listarJornadas(this.id).subscribe(
      (data) => {
        console.log(data)
        this.jornadas = data;
      },
      (error) => {
        console.error('Error al obtener la lista de jornada', error);
      }
    );
  }
//----------------------------------------------------------------------------------------
  obtenerNombreProyecto(id: number): string {
   const proyecto = this.proyectos.find((a) => a.id === id);
    return proyecto ? proyecto.nombreproyecto: '';
  }

 //----------------------------------------------------------------------------------------
  eliminarJornada(id: number) {
    this.jornadasService.deleteJornada(id).subscribe(
      () => {
        console.log('Jornada eliminado correctamente');
        this.listarJornadas();
      },
      (error) => {
        console.error('Error al eliminar el jornada', error);
      }
    );
  }

  update(data: any) {
    this.status=true;
    this.textButton='Editar Jornada'
    this.nuevoJornada.fecha =data.FECHA;
    this.nuevoJornada.url =data.URL;
    this.nuevoJornada.id =data.ID_JORNADA;
    this.nuevoJornada.nombreJornada =data.NOMBRE_JORNADA;
    this.nuevoJornada.proyecto =data.ID_PROYECTO;
    this.imagenSrc = data.URL;
  }
}
