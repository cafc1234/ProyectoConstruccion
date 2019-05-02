import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalFamiliarPage } from '../modal-familiar/modal-familiar.page';
import {FamiliaresService,Familiar} from '../services/familiares.service';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-plan-familiar',
  templateUrl: './plan-familiar.page.html',
  styleUrls: ['./plan-familiar.page.scss'],
})
export class PlanFamiliarPage implements OnInit {

  public familiares:any=[];

  constructor(public modalController: ModalController, public familiaresService:FamiliaresService,public afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.familiaresService.getFamiliares().subscribe(familiares=>{
           this.familiares=familiares;
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
