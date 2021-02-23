import { Component, OnInit, Input, TemplateRef, ViewChild } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialogRef } from '@angular/material/dialog';

import { fuseAnimations } from '@fuse/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { FuseConfirmDialogComponent } from '@fuse/components/confirm-dialog/confirm-dialog.component';
import { ReporteCamareroService } from 'app/services/reporteCamarero.service';
import { Cliente } from 'app/main/model/cliente.model';

import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
/* import { DatePipe } from '@angular/common';
 */

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.scss'],
  animations: fuseAnimations
})
export class ReporteComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;
  FacturaForm: FormGroup;
  detalleFacturaForm: FormGroup;
  detalleFacturaData: any;

  facturaData: any;
  isEdit = false;
  cocinero: any
  paramsIdFactura: any;
  listaCliente: any;
  listaCocinero: any;
  listaMesa: any;
  listaCamarero: any;

  constructor(
    private _formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private _router: Router,
/*     private dp: DatePipe
 */  ) {
  

  }

  ngOnInit() {

  }

}

