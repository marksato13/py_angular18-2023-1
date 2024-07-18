import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Equi } from 'src/app/models/equipo';
import { EquiposService } from 'src/app/modules/equipos/service/equipos.service';
import { JornadasService } from 'src/app/modules/jornadas/services/jornadas.service';
import { InformesService } from '../../service/informes.service';

@Component({
  selector: 'app-jornada-informes',
  templateUrl: './jornada-informes.component.html',
  styleUrls: ['./jornada-informes.component.css']
})
export class JornadaInformesComponent implements OnInit{
  dataEquipo:Equi[];
  status:boolean=false;
  id:number;
  idInfome:number
  mockData!:any;
  informe:any[]=[];
  _serviceEquipo = inject(EquiposService)
  _serviceJornada = inject(JornadasService)
  _serviceInforme = inject(InformesService)

  selectedFile: File;


  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = parseInt(params['id']);
    });
    this.getEquipos()
  }

  informes(id:number){
    this.status = true;
    this.idInfome=id;
    this._serviceInforme.getDataInforme(this.idInfome).subscribe(data=>{
      console.log(data)
      this.informe = data;
    })
  }

  editar(item:any){
    this.mockData = item;
    console.log(this.mockData)
    console.log(this.mockData.ESTADO)
  }

  getEquipos(){
    this._serviceEquipo.getEquiposByJor(this.id).subscribe(data =>{
      this.dataEquipo = data;
      console.log(this.dataEquipo)
    })
  }

  editarInforme(){
    delete this.mockData.APELLIDO;
    delete this.mockData.NOMBRE;
    delete this.mockData.NOMBRE_ROL;
    this._serviceInforme.UpdateInforme(this.mockData.ID_EQUIPO_ALUMNO,this.mockData)
    .subscribe(data =>{
      this._serviceInforme.getDataInforme(this.idInfome).subscribe(data=>{
        console.log(data)
        this.informe = data;
      })
    })
  }



  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  upload() {
    if (this.selectedFile) {
      console.log('Subir archivo:', this.selectedFile);
      // Implementa aquí tu lógica para subir el archivo
    } else {
      console.log('No se ha seleccionado ningún archivo.');
    }
  }
}