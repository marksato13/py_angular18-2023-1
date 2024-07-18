import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InformesService {
  private URL:string = 'http://localhost:8080/api/equipo/informe/'
  private URLEDITINFORME:string = 'http://localhost:8080/api/equipoa/equipoAlumno/'




  constructor(private http:HttpClient) { }
  getDataInforme(id:number):Observable<any>{
    return this.http.get(this.URL+""+id);
  }

  UpdateInforme(id:number, data:any):Observable<any>{
    delete data.ID_EQUIPO_ALUMNO;
    data.NOTA = data.NOTA.toString()
    data.ESTADO = data.ESTADO.toString()
    data.ESTADO_ASISTENCIA = data.ESTADO_ASISTENCIA.toString()
    data.HORAS_REALIZADAS = data.HORAS_REALIZADAS.toString()
    data = this.convertirKeysAMinusculas(data);
    console.log(data)
    return this.http.put(this.URLEDITINFORME+""+id,data);
  }

   convertirKeysAMinusculas(objeto) {
    var nuevoObjeto = {};
    for (var clave in objeto) {
      if (objeto.hasOwnProperty(clave)) {
        nuevoObjeto[clave.toLowerCase()] = objeto[clave];
      }
    }
    return nuevoObjeto;
  }
}
