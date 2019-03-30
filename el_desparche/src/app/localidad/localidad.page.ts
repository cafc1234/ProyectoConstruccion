import { Component } from '@angular/core';

import { UserServiceService } from '../services/user-service.service';
import { ModalController } from '@ionic/angular';
import { ModalTiendaPage } from '../modal-tienda/modal-tienda.page';

@Component({
  selector: 'app-localidad',
  templateUrl: 'localidad.page.html',
  styleUrls: ['localidad.page.scss']
})

  export class LocalidadPage {
    constructor(public userService: UserServiceService,public modalController: ModalController){
  
    }
    
    async presentModalTienda() {

      const modal = await this.modalController.create({
        component: ModalTiendaPage,
        componentProps: { value: 123 }
      });
      return await modal.present();
    }

  }
  

 

