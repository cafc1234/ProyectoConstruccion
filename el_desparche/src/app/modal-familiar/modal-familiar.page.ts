import { Component, OnInit } from '@angular/core';
// Se importa el servicio
import { UserServiceService } from '../services/user-service.service';

import { NavController,ModalController } from '@ionic/angular';

import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-modal-familiar',
  templateUrl: './modal-familiar.page.html',
  styleUrls: ['./modal-familiar.page.scss'],
})
export class ModalFamiliarPage implements OnInit {

  constructor(public userService: UserServiceService,private nav:NavController,private modalCtrl:ModalController,public alertController: AlertController) { }
  //Se define una variable array de tipo any
  users: any[] = [];
  //Al cargar trae un servicio 
  ngOnInit() {
    this.userService.getUsers().subscribe(
      (data) => { // Success
      this.users = data['results'];
      },
      (error) =>{
      console.error(error);
      }
      )
  }

  closeModal()
  {
    this.modalCtrl.dismiss();
  }

  async presentAlertConfirm(nombre) {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Deseas enviar la invitación a '+nombre+' ?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

}
