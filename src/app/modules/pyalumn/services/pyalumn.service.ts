import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conv } from 'src/app/models/convenio';
import { Escu } from 'src/app/models/escuela';
import { Proyect } from 'src/app/models/proyecto';
import { Semes } from 'src/app/models/semestre';
import { Tipopro } from 'src/app/models/tipoproyecto';

@Injectable({
    providedIn: 'root'
})
export class PyalumnService {
    public apiUrl = 'http://localhost:8080/api/proyecto';
    public convenioUrl = 'http://localhost:8080/api/convenio';
    public escuelaUrl = 'http://localhost:8080/api/escuela';
    public semestreUrl = 'http://localhost:8080/api/semestre';
    public tipoproyectoUrl = 'http://localhost:8080/api/tipoproyecto';

    constructor(public http: HttpClient) { }

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

}
