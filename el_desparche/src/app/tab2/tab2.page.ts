import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalFamiliarPage } from '../modal-familiar/modal-familiar.page';
import { ModalVacaPage } from '../modal-vaca/modal-vaca.page';
import { ModalEventoPage } from '../modal-evento/modal-evento.page';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(public modalController: ModalController){
  
  }

 


  async presentModalEvento() {
    const modal = await this.modalController.create({
      component: ModalEventoPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }
}

 
    

