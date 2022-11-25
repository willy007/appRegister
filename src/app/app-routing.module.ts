import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login-page',
    pathMatch: 'full'
  },
  {
    path: 'loading-page',
    loadChildren: () => import('./views/loading-page/loading-page.module').then( m => m.LoadingPagePageModule)
  },
  {
    path: 'login-page',
    loadChildren: () => import('./views/login-page/login-page.module').then( m => m.LoginPagePageModule)
  },
  {
    path: 'home-page',
    loadChildren: () => import('./views/home-page/home-page.module').then( m => m.HomePagePageModule)
  },
  {
    path: 'detalle-asistencia-page',
    loadChildren: () => import('./views/detalle-asistencia-page/detalle-asistencia-page.module').then( m => m.DetalleAsistenciaPagePageModule)
  },
  {
    path: 'informe-ramo-page',
    loadChildren: () => import('./views/informe-ramo-page/informe-ramo-page.module').then( m => m.InformeRamoPagePageModule)
  },
  {
    path: 'registro-page',
    loadChildren: () => import('./views/registro-page/registro-page.module').then( m => m.RegistroPagePageModule)
  }




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
