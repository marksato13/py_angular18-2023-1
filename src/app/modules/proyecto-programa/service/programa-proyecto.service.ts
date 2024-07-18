import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramaProyectoService {
  private URL:string = 'http://localhost:8080/api/facultad/ListFacul'
  private URLSEARCH:string = 'http://localhost:8080/api/jornada/searchByProyecto/'
  private URLJORNADASPERSONAS:string ='http://localhost:8080/api/jornada/ListJornadasPersonas/'
  constructor(private htpp:HttpClient) { }

  getFacultad():Observable<any>{
    return this.htpp.get(this.URL);
  }

  getSearchByProyecto(id:number):Observable<any>{
    return this.htpp.get(this.URLSEARCH+""+id)
  }

  getSearchByPersona(id:number):Observable<any>{
    return this.htpp.get(this.URLJORNADASPERSONAS+""+id)
  }
}
