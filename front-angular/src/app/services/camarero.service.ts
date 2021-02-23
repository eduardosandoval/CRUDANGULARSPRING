import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EnvService } from './env.service';
import { Cliente } from 'app/main/model/cliente.model';

@Injectable({
  providedIn: 'root'
})

export class CamareroService {

  baseUrl = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient, private envService: EnvService) { }

  public getCamareros(): any {
    return this.httpClient.get(this.baseUrl + 'getCamareros');
  }
  public getCamarerosId(idCliente): any {
    return this.httpClient.get(this.baseUrl + 'getCamarerosId/'+idCliente);
  }
  public saveCamarero(camareroDTO): any {
    return this.httpClient.post(this.baseUrl + 'saveCamarero', camareroDTO);
  }

}

