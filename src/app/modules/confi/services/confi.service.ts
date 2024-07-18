import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Opcione } from 'src/app/models/opcione';
import { Rol } from 'src/app/models/rol';
import { Rolo } from 'src/app/models/rol-opciones';

@Injectable({
  providedIn: 'root'
})
export class ConfiService {
  public apiUrl = 'http://localhost:8080/api/rolopciones';
  public rolUrl = 'http://localhost:8080/api/rol';
  public opcioneUrl = 'http://localhost:8080/api/opciones';


  constructor(public http: HttpClient) {}

  agregarRolo(rol_opciones: Rolo): Observable<Rolo> {
    return this.http.post<Rolo>(`${this.apiUrl}/InsertRolopc`, rol_opciones);
  }

  obtenerRol(): Observable<Rol[]> {
    return this.http.get<Rol[]>(`${this.rolUrl}/ListRol`);
  }

  obtenerOpcione(): Observable<Opcione[]> {
    return this.http.get<Opcione[]>(`${this.opcioneUrl}/ListOpci`);
  }


  listarRolos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/ListRolopc`);
  }

//DeleteBook
  deleteRolo(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/DeleteRolopc/${id}`);
  }
}