import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlmacenCadenaPage } from './almacen-cadena.page';

const routes: Routes = [
  {
    path: '',
    component: AlmacenCadenaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AlmacenCadenaPage]
})
export class AlmacenCadenaPageModule {}
