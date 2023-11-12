import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlfabetoService {

  constructor(private http: HttpClient) { }

  getAlfabeto():Observable<any>{
    return this.http.get('../../../assets/json/alfabeto.json');
  }

}
