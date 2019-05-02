import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'nav', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'modal-familiar', loadChildren: './modal-familiar/modal-familiar.module#ModalFamiliarPageModule' },
  { path: 'modal-vaca', loadChildren: './modal-vaca/modal-vaca.module#ModalVacaPageModule' },  
  { path: 'modal-evento', loadChildren: './modal-evento/modal-evento.module#ModalEventoPageModule' },
  { path: 'registro', loadChildren: './registro/registro.module#RegistroPageModule' },
  { path: 'loc', loadChildren: './localidad/localidad.module#LocalidadPageModule' },
  { path: 'terminos', loadChildren: './terminos/terminos.module#TerminosPageModule' },
  { path: 'tienda-ejemplo', loadChildren: './tienda-ejemplo/tienda-ejemplo.module#TiendaEjemploPageModule' },
  { path: 'cerrar-sesion', loadChildren: './cerrar-sesion/cerrar-sesion.module#CerrarSesionPageModule' },
  { path: 'plan-familiar', loadChildren: './plan-familiar/plan-familiar.module#PlanFamiliarPageModule' },
  { path: 'almacen', loadChildren: './almacen/almacen.module#AlmacenPageModule' },
  { path: 'plan-vaca', loadChildren: './plan-vaca/plan-vaca.module#PlanVacaPageModule' },
  { path: 'tienda-barrio', loadChildren: './tienda-barrio/tienda-barrio.module#TiendaBarrioPageModule' },
  { path: 'almacen-cadena', loadChildren: './almacen-cadena/almacen-cadena.module#AlmacenCadenaPageModule' },
  { path: 'cafe-bar', loadChildren: './cafe-bar/cafe-bar.module#CafeBarPageModule' },
  { path: 'disco-disco', loadChildren: './disco-disco/disco-disco.module#DiscoDiscoPageModule' },
  { path: 'cafe-ybar', loadChildren: './cafe-ybar/cafe-ybar.module#CafeYbarPageModule' },
  { path: 'cafebar', loadChildren: './cafebar/cafebar.module#CafebarPageModule' },
  { path: 'discotecas', loadChildren: './discotecas/discotecas.module#DiscotecasPageModule' },  { path: 'plan-familiar2', loadChildren: './plan-familiar2/plan-familiar2.module#PlanFamiliar2PageModule' },
  { path: 'invitaciones-familiares', loadChildren: './invitaciones-familiares/invitaciones-familiares.module#InvitacionesFamiliaresPageModule' }







];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
