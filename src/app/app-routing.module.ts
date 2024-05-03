import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () =>
      import('./modules/inicio/inicio.module').then((m) => m.InicioModule),
  },
  {
    path: 'macrogota',
    loadChildren: () =>
      import('./modules/macrogota/macrogota.module').then(
        (m) => m.MacrogotaModule
      ),
  },
  {
    path: 'microgota',
    loadChildren: () =>
      import('./modules/microgota/microgota.module').then(
        (m) => m.MicrogotaModule
      ),
  },
  {
    path: 'diluicao',
    loadChildren: () =>
      import('./modules/diluicao/diluicao.module').then(
        (m) => m.DiluicaoModule
      ),
  },
  {
    path: 'sobre',
    loadChildren: () =>
      import('./modules/sobre/sobre.module').then((m) => m.SobreModule),
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: 'inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {
  // routeIdentifier: string | undefined;
  // constructor(private routeIdentifierService: RouteInfoService) {
  //   routes.forEach((route: any) => {
  //     if (route.data && route.data.route_identifier) {
  //       this.routeIdentifierService.setRouteIdentifier(
  //         route.path || '',
  //         route.data.route_identifier
  //       );
  //     }
  //   });
  // }
}
