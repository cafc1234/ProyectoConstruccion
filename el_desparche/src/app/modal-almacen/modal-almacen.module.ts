import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalAlmacenPage } from './modal-almacen.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAlmacenPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalAlmacenPage]
})
export class ModalAlmacenPageModule {}
