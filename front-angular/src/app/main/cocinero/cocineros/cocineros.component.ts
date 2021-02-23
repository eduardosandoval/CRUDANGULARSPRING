import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { CocineroService } from 'app/services/cocinero.service';
import * as moment from 'moment';
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-cocineros',
  templateUrl: './cocineros.component.html',
  styleUrls: ['./cocineros.component.scss'],
  providers: [DatePipe],
  animations: fuseAnimations
})
export class CocinerosComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayedColumns = ['nombre', 'apellido1', 'apellido2'];
  dataSource: any;
  permisosUsuario;
  usuario;
  usuarioInfo;
  constructor(private _cocineroService: CocineroService,
    private route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {



    this._cocineroService.getCocineros().subscribe(clientes => {
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
