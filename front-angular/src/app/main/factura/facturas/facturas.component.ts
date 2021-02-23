import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { FacturaService } from 'app/services/factura.service';
import * as moment from 'moment';
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.scss'],
  providers: [DatePipe],
  animations: fuseAnimations
})
export class FacturasComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayedColumns = ['factura', 'nombrecliente'];
  dataSource: any;
  permisosUsuario;

  usuario;
  usuarioInfo;
  constructor(private _facturaService: FacturaService,
    private route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {



    this._facturaService.getFacturas().subscribe(clientes => {
      this.dataSource = new MatTableDataSource(clientes);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

  }


  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



  editarFactura(factura) {
    this._router.navigate(['/factura/' + factura.idfactura]);
  }

}
