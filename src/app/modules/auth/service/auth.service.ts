import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Auth } from 'src/app/models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // URL base para las solicitudes HTTP

  private URL_API = 'http://localhost:8080/api/usuario'
    // BehaviorSubject para emitir eventos cuando hay cambios en los módulos

  public emitModule:BehaviorSubject<any> =new BehaviorSubject<any>(null);
  constructor(private http: HttpClient) { }
  // Método para obtener módulos y verificar las credenciales

  public getModulesVerifyCount(auth:Auth):Observable<any>{
        // Imprimir en la consola el nombre de usuario y la contraseña

    console.log(auth.user,auth.pass)
        // Realizar una solicitud HTTP GET a la URL del backend para verificar credenciales

    return this.http.get<any>(`${this.URL_API}/initSesion/${auth.user}/${auth.pass}`)
  }
}
