import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Equi } from '../../../models/equipo';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {
  private URL:string = 'http://localhost:8080/api/jornada/ListJor';
  private URLEQUIPO:string ='http://localhost:8080/api/equipo'
  private URLALUMNO:string ='http://localhost:8080/api/alumno'
  constructor(private HttpClient:HttpClient) { }

  public getJornada():Observable<any>{
    return this.HttpClient.get(this.URL);
  }

  public getEquiposByJor(id:number):Observable<any>{
    return this.HttpClient.get(`${this.URLEQUIPO}/ListEquiJor/${id}`)
  }

  public deleteEquipo(id:number):Observable<any>{
    return this.HttpClient.delete(`${this.URLEQUIPO}/DeleteEqui/${id}`);
  }

  public getAlumnos():Observable<any>{
    return this.HttpClient.get(`${this.URLALUMNO}/ListAlum`)
  }

  public insertEquipo(data:Equi):Observable<any>{
    return this.HttpClient.post(`${this.URLEQUIPO}/InsertEqui`,data)
  }
}
