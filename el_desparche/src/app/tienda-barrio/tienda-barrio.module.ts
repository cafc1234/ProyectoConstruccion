import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TiendaBarrioPage } from './tienda-barrio.page';

const routes: Routes = [
  {
    path: '',
    component: TiendaBarrioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TiendaBarrioPage]
})
export class TiendaBarrioPageModule {}
