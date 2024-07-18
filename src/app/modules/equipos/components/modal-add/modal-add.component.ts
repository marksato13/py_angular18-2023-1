import { Component, Input, OnInit, inject } from '@angular/core';
import { EquiposService } from '../../service/equipos.service';
import { Alumno } from 'src/app/models/alumno';
import { Storage, getDownloadURL, ref, uploadBytes } from '@angular/fire/storage';
import { Equi } from 'src/app/models/equipo';
import { EquipoAlumno } from 'src/app/models/equipo-alumno';

@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.css']
})
export class ModalAddComponent implements OnInit{
  @Input() id:number;
  dataEquipo:Equi = new Equi();
  dataAlumno:Alumno[];
  file:any;
  imagenSrc:any;
  imgRef:any;
  url:string;
  alumno: EquipoAlumno[]=[];
  _service=inject(EquiposService)

  constructor(private stor:Storage){

  }

  ngOnInit(): void {
   this.getAlumno()
  }

  getAlumno(){
    this._service.getAlumnos().subscribe(data =>{
      this.dataAlumno = data;
    })
  }

  async uploadFile($event: any) {
    this.file = $event.target.files[0];
    this.imgRef = ref(this.stor, `files/${this.file.name}`);
  }

  async insertDocument() {
    return new Promise((resolve, reject) => {
      uploadBytes(this.imgRef, this.file)
        .then(() => {
          const starsRef = ref(this.stor, `files/${this.file.name}`);
          getDownloadURL(starsRef).then((data) => {
            this.url = data;
            resolve(this.url);
            return;
          });
        })
        .catch((error) => console.log(error));
    });
  }

  async agregarEquipo(){
    this.dataEquipo.jornada = this.id;
    this.dataEquipo.archivo_informe = await this.insertDocument();
    this._service.insertEquipo(this.dataEquipo).subscribe(data =>{
      console.log(data);
      this.dataEquipo = new Equi();
    })
  }

  checkout(id:number){
    const index = this.alumno.findIndex(item => item.id_alumno == id);

    if (index === -1) {
      let equipoAlumno:EquipoAlumno ={
        calificacion: 0,
        estado: 0,
        estados_realiziados: 0,
        horas_realizadas: 0,
        nota: 0,
        id_alumno: id,
        id_equipo: this.id,
        id_proyecto_rol: 1,
        id_equipo_alumno: 0
      }
      this.alumno.push(equipoAlumno)
    } else {
      this.alumno.splice(index, 1);
}

  }



}
