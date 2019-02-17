import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
// Se importa el servicio
import { UserServiceService } from '../services/user-service.service';
import { ModalController } from '@ionic/angular';
import { ModalAlmacenPage } from '../modal-almacen/modal-almacen.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  constructor(public userService: UserServiceService,public modalController: ModalController){
  
  }
  //Se encarga de mostrar el modal almacen
  async presentModalAlmacen() {
    const modal = await this.modalController.create({
      component: ModalAlmacenPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }
}
