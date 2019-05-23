import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlanVaca2Page } from './plan-vaca2.page';

const routes: Routes = [
  {
    path: '',
    component: PlanVaca2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlanVaca2Page]
})
export class PlanVaca2PageModule {}
