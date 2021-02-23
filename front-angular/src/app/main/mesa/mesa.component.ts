import { Component, OnInit, Input, TemplateRef, ViewChild } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialogRef } from '@angular/material/dialog';

import { fuseAnimations } from '@fuse/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { FuseConfirmDialogComponent } from '@fuse/components/confirm-dialog/confirm-dialog.component';
import {  MesaService} from 'app/services/mesa.service';
import { Cliente } from 'app/main/model/cliente.model';

import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
/* import { DatePipe } from '@angular/common';
 */

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.scss'],
  animations: fuseAnimations
})
export class MesaComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;
  mesaForm: FormGroup;
  clienteData: any;
  isEdit = false;
  cocinero :any
  paramsIdMesa: any;

  constructor(private _mesaService: MesaService,
    private _formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private _router: Router,
 ) {
   this.route.paramMap.subscribe(params => {
      this.paramsIdMesa = params.get('idmesa')
      this.mesaForm=this.mesaVaciaForm()
      if (params.get('idmesa')) {
        this._mesaService.getMesasId(this.paramsIdMesa).subscribe((mesas: any) => {
          this.clienteData = mesas;
          this.mesaForm = this.mesaFormParametro(this.clienteData[0])

        });

      } else {

        this.mesaForm = this.mesaVaciaForm();

      }

    });
 }

  ngOnInit() {
   

  }



  saveMesa() {
    const mesaDTO = this.mesaForm.getRawValue()

    this._mesaService.saveMesa(mesaDTO).subscribe(data => {
      alert('se guardó la mesa con éxito');
      this._router.navigate(['/mesas']);

      this.mesaForm.reset()
    })
    
  }

  limpiarCliente() {

    this.mesaForm = this.mesaVaciaForm();
  }





  mesaVaciaForm(): any {

    return this._formBuilder.group({
      idmesa: [{ value: '', disabled: false }],
      ubicacion: [{ value: '', disabled: false }],
      nunmaxpersonas: [{ value: '', disabled: false },],
      identificacion: [{ value: '', disabled: false }],

    });
  }


mesaFormParametro(parametro): any {
 return this._formBuilder.group({
  idmesa: [parametro.idmesa],
  ubicacion: [ parametro.ubicacion],
  nunmaxpersonas: [ parametro.nunmaxpersonas],
  identificacion: [parametro.identificacion],
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







}

