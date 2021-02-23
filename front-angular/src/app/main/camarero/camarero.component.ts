import { Component, OnInit, Input, TemplateRef, ViewChild } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialogRef } from '@angular/material/dialog';

import { fuseAnimations } from '@fuse/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { FuseConfirmDialogComponent } from '@fuse/components/confirm-dialog/confirm-dialog.component';
import {  CamareroService} from 'app/services/camarero.service';
import { Cliente } from 'app/main/model/cliente.model';

import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
/* import { DatePipe } from '@angular/common';
 */

@Component({
  selector: 'app-camarero',
  templateUrl: './camarero.component.html',
  styleUrls: ['./camarero.component.scss'],
  animations: fuseAnimations
})
export class CamareroComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;
  clienteForm: FormGroup;
  clienteData: any;
  isEdit = false;
  cliente = new Cliente()
  paramsIdCliente: any;

  constructor(private _camareroService: CamareroService,
    private _formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private _router: Router, 
 ) {
   this.route.paramMap.subscribe(params => {
      this.paramsIdCliente = params.get('idcamarero')
      this.clienteForm=this.clienteFormVacio()
      if (params.get('idcamarero')) {
        this._camareroService.getCamarerosId(this.paramsIdCliente).subscribe((clientes: any) => {
          this.clienteData = clientes;
          this.clienteForm = this.clienteFormParametro(this.clienteData[0])

        });

      } else {

        this.clienteForm = this.clienteFormVacio();

      }

    });
 }

  ngOnInit() {
   

  }



  saveCliente() {
    this.cliente = this.clienteForm.getRawValue()

    this._camareroService.saveCamarero(this.cliente).subscribe(data => {
      alert('se guardó el camarero con éxito');
      this._router.navigate(['/camareros']);
      this.clienteForm.reset()
    })
 
  }

  limpiarCliente() {

    this.clienteForm = this.clienteFormVacio();
  }





  clienteFormVacio(): any {

    return this._formBuilder.group({
      idcamarero: [{ value: '', disabled: false }],
      nombre: [{ value: '', disabled: false }],
      apellido1: [{ value: '', disabled: false },],
      apellido2: [{ value: '', disabled: false }],

    });
  }


  clienteFormParametro(parametro): any {
    return this._formBuilder.group({
  idcamarero: [parametro.idcamarero],
    nombre: [ parametro.nombre],
    apellido1: [ parametro.apellido1],
    apellido2: [parametro.apellido2],
  });
  }


  fechaFormatter(fecha: any): any {

    var dateobj = new Date(fecha);

    var B = dateobj.toISOString();
    const split = B;
    const dat = split.split('-');
    const año = dat[0];
    const mes = dat[1];
    const dia = dat[2].substring(0, 2);
    const fechaFinal = dia + '/' + mes + '/' + año;

    return fechaFinal;
  }





  newCliente() {
    this.clienteForm = this.clienteFormVacio()
  }



}

