import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'dashboards',
        title    : 'Inicio',
        type     : 'item',
        icon     : 'home',
        url      : '/dashboard'
    },
   
            {
                id   : 'analytics',
                title: 'Cliente',
                type : 'item',
                url  : '/clientes'
            },
            {
                id   : 'analytics',
                title: 'Camarero',
                type : 'item',
                url  : '/camareros'
            },
            {
                id   : 'analytics',
                title: 'Cocinero',
                type : 'item',
                url  : '/cocineros'
            },
            {
                id   : 'analytics',
                title: 'Mesa',
                type : 'item',
                url  : '/mesas'
            },
            {
                id   : 'analytics',
                title: 'Factura',
                type : 'item',
                url  : '/facturas'
            },
    {
        id       : 'projects',
        title    : 'Reportes',
        type     : 'collapsable',
        icon     : 'dashboard',
        children : [
            {
                id   : 'projectElaboration',
                title: 'Reporte Camarero',
                type : 'item',
                url  : '/reporteCamarero'
            }
        
        ]
    }
];
