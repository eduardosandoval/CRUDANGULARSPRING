import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EnvService } from './env.service';
import { Cliente } from 'app/main/model/cliente.model';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  baseUrl = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient, private envService: EnvService) { }

  public getClientes(): any {
    return this.httpClient.get(this.baseUrl + 'getClientes');
  }
  public getClientesId(idCliente): any {
    return this.httpClient.get(this.baseUrl + 'getClientesId/'+idCliente);
  }
  public saveCliente(clienteDTO:Cliente): any {
    return this.httpClient.post(this.baseUrl + 'saveCliente', clienteDTO);
  }

}

