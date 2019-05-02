import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'nav', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'modal-familiar', loadChildren: './modal-familiar/modal-familiar.module#ModalFamiliarPageModule' },
  { path: 'modal-vaca', loadChildren: './modal-vaca/modal-vaca.module#ModalVacaPageModule' },  
  { path: 'modal-almacen', loadChildren: './modal-almacen/modal-almacen.module#ModalAlmacenPageModule' },
  { path: 'modal-tienda', loadChildren: './modal-tienda/modal-tienda.module#ModalTiendaPageModule' },
  { path: 'modal-bar', loadChildren: './modal-bar/modal-bar.module#ModalBarPageModule' },
  { path: 'modal-disco', loadChildren: './modal-disco/modal-disco.module#ModalDiscoPageModule' },
  { path: 'modal-evento', loadChildren: './modal-evento/modal-evento.module#ModalEventoPageModule' },
  { path: 'registro', loadChildren: './registro/registro.module#RegistroPageModule' },
  { path: 'loc', loadChildren: './localidad/localidad.module#LocalidadPageModule' },
  { path: 'terminos', loadChildren: './terminos/terminos.module#TerminosPageModule' },
  { path: 'tienda-ejemplo', loadChildren: './tienda-ejemplo/tienda-ejemplo.module#TiendaEjemploPageModule' },  { path: 'cerrar-sesion', loadChildren: './cerrar-sesion/cerrar-sesion.module#CerrarSesionPageModule' },
  { path: 'plan-familiar', loadChildren: './plan-familiar/plan-familiar.module#PlanFamiliarPageModule' },
  { path: 'almacen', loadChildren: './almacen/almacen.module#AlmacenPageModule' }





];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
