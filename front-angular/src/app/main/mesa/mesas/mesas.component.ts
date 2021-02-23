import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { MesaService } from 'app/services/mesa.service';
import * as moment from 'moment';
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.scss'],
  providers: [DatePipe],
  animations: fuseAnimations
})
export class MesasComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayedColumns = ['identificacion', 'nunmaxpersonas', 'ubicacion'];
  dataSource: any;
  permisosUsuario;
  usuario;
  usuarioInfo;
  constructor(private _mesaService: MesaService,
    private route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {



    this._mesaService.getMesas().subscribe(clientes => {
      this.dataSource = new MatTableDataSource(clientes);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

  }


  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



  editarCliente(cliente) {
    this._router.navigate(['/cliente/' + cliente.id_cliente]);
  }

}
