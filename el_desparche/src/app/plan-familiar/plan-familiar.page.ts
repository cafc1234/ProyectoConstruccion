import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalFamiliarPage } from '../modal-familiar/modal-familiar.page';
import {FamiliaresService} from '../services/familiares.service';

@Component({
  selector: 'app-plan-familiar',
  templateUrl: './plan-familiar.page.html',
  styleUrls: ['./plan-familiar.page.scss'],
})
export class PlanFamiliarPage implements OnInit {

  public familiares:any=[];

  constructor(public modalController: ModalController, public familiaresService:FamiliaresService) { }

  ngOnInit() {
    this.familiaresService.getFamiliares().subscribe(familiares=>{
         familiares.map(familiares=>{
              //console.log(familiares.payload.doc.data());
              this.familiares.push(familiares.payload.doc.data());
         });
     });
  }

    //Se encarga de mostrar el modal familiar
    async presentModalFamiliar() {
      const modal = await this.modalController.create({
        component: ModalFamiliarPage,
        componentProps: { value: 123 }
      });
      return await modal.present();
    }

}
