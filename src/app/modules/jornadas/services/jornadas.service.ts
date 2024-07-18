import { Injectable } from '@angular/core';
import { Jorn } from 'src/app/models/jornada';
import { Proyect } from 'src/app/models/proyecto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Proyecti } from 'src/app/models/proye';

@Injectable({
  providedIn: 'root'
})
export class JornadasService {

  public apiUrl = 'http://localhost:8080/api/jornada';
  public proyectoUrl = 'http://localhost:8080/api/proyecto';


  constructor(public http: HttpClient) {}
  
  agregarJornada(jornada: Jorn): Observable<Jorn> {
    console.log(jornada)
    return this.http.post<Jorn>(`${this.apiUrl}/Insertjornadas`, jornada);
  }

  obtenerProyecto(): Observable<Proyecti[]> {
    return this.http.get<Proyecti[]>(`${this.proyectoUrl}/ListProyecto`);
  }


  listarJornadas(id:number): Observable<any> {
    console.log(id)
    return this.http.get(`${this.apiUrl}/ListJornadas/${id}`);
  }

//DeleteBook
  deleteJornada(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/DeleteJor/${id}`);
  }
  editarJornada(id: number,data:any): Observable<any> {
    return this.http.put(`${this.apiUrl}/EdidJor/${id}`,data);
  }
}