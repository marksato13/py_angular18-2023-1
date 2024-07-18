import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuHeaderService {

  private URL_API = 'http://localhost:8080/api/usuario'
  public sidebar:BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient) { }

  public getModules(id:number):Observable<any>{
    return this.http.get(`${this.URL_API}/modules/${id}`)
  }
}
