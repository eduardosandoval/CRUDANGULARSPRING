import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EnvService } from './env.service';
import { Cliente } from 'app/main/model/cliente.model';

@Injectable({
  providedIn: 'root'
})

export class FacturaService {

  baseUrl = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient, private envService: EnvService) { }

  public getMesasFactura(): any {
    return this.httpClient.get(this.baseUrl + 'getMesasFactura');
  }
  
  public getCocinerosFactura(): any {
    return this.httpClient.get(this.baseUrl + 'getCocinerosFactura');
  }

  public getClientesFactura(): any {
    return this.httpClient.get(this.baseUrl + 'getClientesFactura');
  }
  
  public getCamarerosFactura(): any {
    return this.httpClient.get(this.baseUrl + 'getCamarerosFactura');
  }

  public getFacturas(): any {
    return this.httpClient.get(this.baseUrl + 'getFacturaVw');
  }

  public getFacturaVwId(paramsIdFactura): any {
    return this.httpClient.get(this.baseUrl + 'getFacturaVwId/'+paramsIdFactura);
  }

  public getDetalleFacturaId(idFactura): any {
    return this.httpClient.get(this.baseUrl + 'getDetalleFacturaId/'+idFactura);
  }

  public saveDetalleFactura(facturaDTO): any {
    return this.httpClient.post(this.baseUrl + 'saveDetalleFactura', facturaDTO);
  }
  public saveFactura(facturaDTO): any {
    return this.httpClient.post(this.baseUrl + 'saveFactura', facturaDTO);
  }
  
}

