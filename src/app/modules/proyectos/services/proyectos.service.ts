import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Proyect } from 'src/app/models/proyecto';
import { Conv } from '../../../models/convenio';
import { Escu } from 'src/app/models/escuela';
import { Semes } from '../../../models/semestre';
import { Tipopro } from 'src/app/models/tipoproyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  private apiUrl = 'http://localhost:8080/api/proyecto';
  private convenioUrl = 'http://localhost:8080/api/convenio';
  private escuelaUrl = 'http://localhost:8080/api/escuela';
  private semestreUrl = 'http://localhost:8080/api/semestre';
  private tipoproyectoUrl = 'http://localhost:8080/api/tipoproyecto';
  public statusSend:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public statusUpdate:BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public viewProyecto:BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public statusCloseX:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(public http: HttpClient) {}
  agregarProyecto(proyecto: Proyect): Observable<Proyect> {
    return this.http.post<Proyect>(`${this.apiUrl}/InsertProyecto`, proyecto);
  }
  obtenerConvenio(): Observable<Conv[]> {
    return this.http.get<Conv[]>(`${this.convenioUrl}/ListConv`);
  }
  obtenerEscuela(): Observable<Escu[]> {
    return this.http.get<Escu[]>(`${this.escuelaUrl}/ListEscu`);
  }
  obtenerSemestre(): Observable<Semes[]> {
    return this.http.get<Semes[]>(`${this.semestreUrl}/ListSeme`);
  }
  obtenerTipoProyec(): Observable<Tipopro[]> {
    return this.http.get<Tipopro[]>(`${this.tipoproyectoUrl}/ListTipoP`);
  }
  listarProyecto(): Observable<any> {
    return this.http.get(`${this.apiUrl}/ListProyecto`);
  }
//DeleteBook
  deleteProyecto(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/DeleteProyecto/${id}`);
  }

  updateProyecto(id: number, proyecto:Proyect): Observable<any> {
    return this.http.put(`${this.apiUrl}/EdidProyecto/${id}`,proyecto);
  }
}


