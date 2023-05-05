import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Cliente } from '../models/cliente/cliente.module';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {


  private apiUrl:string = 'http://3.141.193.66:1433/api/contact';

  constructor(private http: HttpClient) { }

  //Metodo GET para obtener los clientes
  getAllClient(): Observable<Cliente[] | any> {
    return this.http.get(`${this.apiUrl}`)
  }

  //Metodo POST para eniviar datos al endpoint
  addContact(contact: any) {
    return this.http.post(this.apiUrl, contact);
  }

}
