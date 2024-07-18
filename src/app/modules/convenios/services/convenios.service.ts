import { Injectable } from '@angular/core';
import { Tipocom } from 'src/app/models/tipoconvenio';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Conve } from 'src/app/models/conveni';

@Injectable({
  providedIn: 'root'
})
export class ConveniosService {
  public apiUrl = 'http://localhost:8080/api/convenio';
  public tipoconUrl = 'http://localhost:8080/api/tipocomvenio';


  constructor(public http: HttpClient) {}

  agregarConvenio(convenio: Conve): Observable<Conve> {
    return this.http.post<Conve>(`${this.apiUrl}/Insertconv`, convenio);
  }

  obtenerTipocomvenio(): Observable<Tipocom[]> {
    return this.http.get<Tipocom[]>(`${this.tipoconUrl}/ListTipoC`);
  }


  listarConvenios(): Observable<any> {
    return this.http.get(`${this.apiUrl}/ListConv`);
  }

//DeleteBook
  deleteConvenio(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/DeleteConv/${id}`);
  }
}