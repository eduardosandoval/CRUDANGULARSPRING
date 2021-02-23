import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { DashboardModule } from 'app/main/dashboard/dashboard.module';
import { ClientesModule } from './main/cliente/cliente.module';
import { CamarerosModule } from './main/camarero/camarero.module';
import { CocineroModule } from './main/cocinero/cocinero.module';
import { MesaModule } from './main/mesa/mesa.module';
import { FacturaModule } from './main/factura/factura.module';
import { ReporteModule } from './main/reporteCamarero/reporte.module';

import { LoginModule } from './main/login/login.module';

import { EnvServiceProvider } from './services/env.service.provider';

const appRoutes: Routes = [
    {
        path: '**',
        redirectTo: 'login'
    }
];

@NgModule({
    declarations: [
        AppComponent

    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),

        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        DashboardModule,
        
        ClientesModule,
        LoginModule,
        CamarerosModule,
        CocineroModule,
        MesaModule,
        FacturaModule,
        ReporteModule
    ],
    providers: [EnvServiceProvider],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
