import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EnvService } from './env.service';
import { Cliente } from 'app/main/model/cliente.model';

@Injectable({
  providedIn: 'root'
})

export class MesaService {

  baseUrl = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient, private envService: EnvService) { }

  public getMesas(): any {
    return this.httpClient.get(this.baseUrl + 'getMesas');
  }
  public getMesasId(idMesa): any {
    return this.httpClient.get(this.baseUrl + 'getMesasId/'+idMesa);
  }
  public saveMesa(mesaDTO): any {
    return this.httpClient.post(this.baseUrl + 'saveMesa', mesaDTO);
  }

}

