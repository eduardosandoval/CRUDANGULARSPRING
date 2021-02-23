import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { ReporteCamareroService } from 'app/services/reporteCamarero.service';
import * as moment from 'moment';
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss'],
  providers: [DatePipe],
  animations: fuseAnimations
})
export class ReportesComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayedColumns = ['nombre', 'apellido1','mes','totalfacturado'];
  dataSource: any;
  permisosUsuario;

  usuario;
  usuarioInfo;
  constructor(private _reporteCamareroService: ReporteCamareroService,
    private route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {



    this._reporteCamareroService.getReporteCamarero().subscribe(clientes => {
      console.log('clientes--',clientes)
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
