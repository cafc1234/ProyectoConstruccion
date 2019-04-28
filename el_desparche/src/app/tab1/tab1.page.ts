import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
// Se importa el servicio
import { UserServiceService } from '../services/user-service.service';
import { ModalController } from '@ionic/angular';
import { ModalAlmacenPage } from '../modal-almacen/modal-almacen.page';
import { ModalTiendaPage } from '../modal-tienda/modal-tienda.page';
import { ModalBarPage } from '../modal-bar/modal-bar.page';
import { ModalDiscoPage } from '../modal-disco/modal-disco.page'; 
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  constructor(public userService: UserServiceService,public modalController: ModalController,  public afAuth: AngularFireAuth ){
  
  }
  //Se encarga de mostrar el modal almacen
  async presentModalAlmacen() {
    const modal = await this.modalController.create({
      component: ModalAlmacenPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }

  async presentModalTienda() {
    const modal = await this.modalController.create({
      component: ModalTiendaPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }

  async presentModalBar() {
    const modal = await this.modalController.create({
      component: ModalBarPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }

  async presentModalDisco() {
    const modal = await this.modalController.create({
      component: ModalDiscoPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }
}
