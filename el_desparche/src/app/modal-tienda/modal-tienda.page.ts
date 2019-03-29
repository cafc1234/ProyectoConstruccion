import { Component, OnInit } from '@angular/core';
import { NavController,ModalController } from '@ionic/angular';
// Se importa el servicio
import { UserServiceService } from '../services/user-service.service';



@Component({
  selector: 'app-modal-tienda',
  templateUrl: './modal-tienda.page.html',
  styleUrls: ['./modal-tienda.page.scss'],
})
export class ModalTiendaPage implements OnInit {

  constructor(public userService: UserServiceService, public nav:NavController, public modalCtrl:ModalController) { }



  ngOnInit() {
  }

  closeModal() {
  this.modalCtrl.dismiss();
  }
}