import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiccionarioService {

  constructor(private http: HttpClient) { }

  getDiccionario():Observable<any>{
    return this.http.get('../../../assets/json/diccionario.json');
  }

}
