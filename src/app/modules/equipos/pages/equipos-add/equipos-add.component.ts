import { Component, OnInit, inject } from '@angular/core';
import { EquiposService } from '../../service/equipos.service';
import { ActivatedRoute } from '@angular/router';
import { Equi } from 'src/app/models/equipo';

@Component({
  selector: 'app-equipos-add',
  templateUrl: './equipos-add.component.html',
  styleUrls: ['./equipos-add.component.css']
})
export class EquiposAddComponent implements OnInit{
  dataEquipo:Equi[];
  id:number;
  _serviceEquipo = inject(EquiposService)

  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = parseInt(params['id']);
    });
    this.getEquipos()
  }

  getEquipos(){
    this._serviceEquipo.getEquiposByJor(this.id).subscribe(data =>{
      this.dataEquipo = data;
      console.log(this.dataEquipo)
    })
  }

  asignarRol(id:number){

  }

  updateEquipo(id:number){
    
  }

  eliminarEquipo(id:number){
    console.log(id)
    this._serviceEquipo.deleteEquipo(id).subscribe(res=>{
      console.log(res);
      this.getEquipos()
    })
  }

}
