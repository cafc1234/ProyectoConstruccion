import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CafeYbarPage } from './cafe-ybar.page';

const routes: Routes = [
  {
    path: '',
    component: CafeYbarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CafeYbarPage]
})
export class CafeYbarPageModule {}
