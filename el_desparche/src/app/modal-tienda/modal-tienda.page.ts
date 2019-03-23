import { Component, OnInit } from '@angular/core';
import { NavController,ModalController } from '@ionic/angular';
// Se importa el servicio
import { UserServiceService } from '../services/user-service.service';
import { ModalLocalidadPage } from '../modal-localidad/modal-localidad.page';


@Component({
  selector: 'app-modal-tienda',
  templateUrl: './modal-tienda.page.html',
  styleUrls: ['./modal-tienda.page.scss'],
})
export class ModalTiendaPage implements OnInit {

  constructor(public userService: UserServiceService,public nav:NavController,public modalCtrl:ModalController) { }

  //Se encarga de mostrar el modal localidad
  async presentModalLocalidad() {
    const modal = await this.modalCtrl.create({
      component: ModalLocalidadPage,
      componentProps: { value: 123 } 
    });
    return await modal.present();
  }

  ngOnInit() {
  }

  closeModal()
{
  this.modalCtrl.dismiss();
}


}
