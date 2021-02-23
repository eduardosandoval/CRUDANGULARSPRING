import { Component, OnInit, Input, TemplateRef, ViewChild } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialogRef } from '@angular/material/dialog';

import { fuseAnimations } from '@fuse/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { FuseConfirmDialogComponent } from '@fuse/components/confirm-dialog/confirm-dialog.component';
import { FacturaService } from 'app/services/factura.service';
import { Cliente } from 'app/main/model/cliente.model';

import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
/* import { DatePipe } from '@angular/common';
 */

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss'],
  animations: fuseAnimations
})
export class FacturaComponent implements OnInit {
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

  constructor(private _facturaService: FacturaService,
    private _formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private _router: Router,
/*     private dp: DatePipe
 */  ) {
    this.route.paramMap.subscribe(params => {
      this.paramsIdFactura = params.get('idfactura')
      if (params.get('idfactura')) {
        this.FacturaForm = this.facturaVaciaForm()
        this.detalleFacturaForm = this.detalleFacturaVaciaForm()

        this._facturaService.getFacturaVwId(this.paramsIdFactura).subscribe((factura: any) => {
          this.facturaData = factura;
          this.FacturaForm = this.facturaParametroForm(this.facturaData[0])

        });
        this._facturaService.getDetalleFacturaId(this.paramsIdFactura).subscribe((detalleFactura: any) => {
          this.detalleFacturaData = detalleFactura
          this.detalleFacturaForm = this.detalleFacturaParametroForm(this.detalleFacturaData[0])

        });

      } else {

        this.FacturaForm = this.facturaVaciaForm();

      }

    });

    this._facturaService.getCamarerosFactura().subscribe(response => {
      this.listaCamarero = [];
      this.listaCamarero = response;
    })
    this._facturaService.getClientesFactura().subscribe(response => {
      this.listaCliente = [];
      this.listaCliente = response;
    })
    this._facturaService.getCocinerosFactura().subscribe(response => {
      this.listaCocinero = [];
      this.listaCocinero = response;
    })
    this._facturaService.getMesasFactura().subscribe(response => {
      this.listaMesa = [];
      this.listaMesa = response;
    })
  }

  ngOnInit() {


  }



  saveFactura(): any {
    const facturaDTO = this.FacturaForm.getRawValue()
    facturaDTO.fechafactura = null
    this._facturaService.saveFactura(facturaDTO).subscribe(data => {

      this._router.navigate(['/facturas']);
      alert('se guardó el factura con éxito');
    })


  }

  saveDetalleFactura(): any {
    const detalleFacturaDTO = this.detalleFacturaForm.getRawValue()
    detalleFacturaDTO.idfactura = this.paramsIdFactura
    this._facturaService.saveDetalleFactura(detalleFacturaDTO).subscribe(data => {

      this._router.navigate(['/facturas']);
      alert('se guardó el detallefactura con éxito');
    })


  }





  facturaVaciaForm(): any {

    return this._formBuilder.group({

      idfactura: [{ value: '', disabled: false }],
      idmesa: [{ value: '', disabled: false }],
      idcamarero: [{ value: '', disabled: false }],
      idcliente: [{ value: '', disabled: false }],
      fechafactura: [{ value: '', disabled: false }],


    });
  }
  detalleFacturaParametroForm(parametro): any {
    return this._formBuilder.group({
      iddetallefactura: [parametro.iddetallefactura],
      idcocinero: [parametro.idcocinero],
      plato: [parametro.plato],
      importe: [parametro.importe],
      idfactura: [this.paramsIdFactura],

    });
  }



  detalleFacturaVaciaForm(): any {

    return this._formBuilder.group({

      iddetallefactura: [{ value: '', disabled: false }],
      idcocinero: [{ value: '', disabled: false }],
      plato: [{ value: '', disabled: false }],
      importe: [{ value: '', disabled: false }],
      idfactura: [{ value: '', disabled: false }],


    });
  }
  facturaParametroForm(parametro): any {
    return this._formBuilder.group({
      idfactura: [parametro.idfactura],
      idmesa: [parametro.idmesa],
      idcamarero: [parametro.idcamarero],
      idcliente: [parametro.idcliente],
      fechafactura: [this.fechaFormatter(parametro.fechafactura)],

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

