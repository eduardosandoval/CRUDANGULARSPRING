import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

import {MatButtonModule} from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

//primeng
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { CdkTableModule } from '@angular/cdk/table';
import { FuseConfirmDialogModule, FuseSidebarModule } from '@fuse/components';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatRadioModule} from '@angular/material/radio';
import {MatExpansionModule} from '@angular/material/expansion';
import { ReporteComponent } from './reporte.component';
import { ReportesComponent } from './reportes/reportes.component';

import {MatAutocompleteModule} from '@angular/material/autocomplete';

const routes = [
    {
        path     : 'reporte',
        component: ReporteComponent
    },

    {
        path     : 'reporteCamarero',
        component: ReportesComponent
    },

];

@NgModule({

    imports     : [
        RouterModule.forChild(routes),

        FormsModule,
        ReactiveFormsModule,
        //template
        TranslateModule,
        FuseSharedModule,
       

        //primeng

        CdkTableModule,

        //angular material
        BrowserModule,
        MatIconModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTableModule,
        MatPaginatorModule,
        MatButtonModule,
        MatSortModule,
        MatInputModule,
        MatDialogModule,
        FuseSidebarModule,
        MatDividerModule,
        MatListModule,
        MatCardModule,
        MatTabsModule,
        MatRadioModule,
        MatExpansionModule,
        MatAutocompleteModule,

  
    ],
        declarations: [
            ReporteComponent,
            ReportesComponent,
     ],
    exports     : [
    ],
    entryComponents: [
        
    ],
    providers   : [
    ]
})

export class ReporteModule
{
}
