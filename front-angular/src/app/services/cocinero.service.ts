import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EnvService } from './env.service';
import { Cliente } from 'app/main/model/cliente.model';

@Injectable({
  providedIn: 'root'
})

export class CocineroService {

  baseUrl = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient, private envService: EnvService) { }

  public getCocineros(): any {
    return this.httpClient.get(this.baseUrl + 'getCocineros');
  }
  public getCocinerosId(idCocinero): any {
    return this.httpClient.get(this.baseUrl + 'getCocinerosId/'+idCocinero);
  }
  public saveCocinero(cocineroDTO): any {
    return this.httpClient.post(this.baseUrl + 'saveCocinero', cocineroDTO);
  }

}

