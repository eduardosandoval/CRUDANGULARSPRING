import { Component, OnInit, Input, TemplateRef, ViewChild } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialogRef } from '@angular/material/dialog';

import { fuseAnimations } from '@fuse/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { FuseConfirmDialogComponent } from '@fuse/components/confirm-dialog/confirm-dialog.component';
import {  CocineroService} from 'app/services/cocinero.service';
import { Cliente } from 'app/main/model/cliente.model';

import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
/* import { DatePipe } from '@angular/common';
 */

@Component({
  selector: 'app-cocinero',
  templateUrl: './cocinero.component.html',
  styleUrls: ['./cocinero.component.scss'],
  animations: fuseAnimations
})
export class CocineroComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;
  clienteForm: FormGroup;
  clienteData: any;
  isEdit = false;
  cocinero :any
  paramsIdCocinero: any;

  constructor(private _cocineroService: CocineroService,
    private _formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private _router: Router ) {
  
 }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.paramsIdCocinero = params.get('idcocinero')
    });
    this.clienteForm=this.clienteFormVacio()
    if (this.paramsIdCocinero) {
      this._cocineroService.getCocinerosId(this.paramsIdCocinero).subscribe((clientes: any) => {
        this.clienteData = clientes;
        this.clienteForm = this.clienteFormParametro(this.clienteData[0])

      });

    } else {

      this.clienteForm = this.clienteFormVacio();

    }
  }



  saveCliente() {
    this.cocinero = this.clienteForm.getRawValue()

    this._cocineroService.saveCocinero(this.cocinero).subscribe(data => {
      alert('se guardó el cocinero con éxito');
      this._router.navigate(['/cocineros']);
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
  idcocinero: [parametro.idcocinero],
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

