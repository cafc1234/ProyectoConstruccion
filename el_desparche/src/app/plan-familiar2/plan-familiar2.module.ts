import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlanFamiliar2Page } from './plan-familiar2.page';

const routes: Routes = [
  {
    path: '',
    component: PlanFamiliar2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlanFamiliar2Page]
})
export class PlanFamiliar2PageModule {}
