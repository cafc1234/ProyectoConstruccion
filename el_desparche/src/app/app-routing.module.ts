import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'modal-familiar', loadChildren: './modal-familiar/modal-familiar.module#ModalFamiliarPageModule' },
  { path: 'modal-vaca', loadChildren: './modal-vaca/modal-vaca.module#ModalVacaPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
