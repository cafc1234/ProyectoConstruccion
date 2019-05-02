import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

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

 
    

