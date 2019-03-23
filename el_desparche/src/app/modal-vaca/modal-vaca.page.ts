import { Component, OnInit } from '@angular/core';
// Se importa el servicio
import { UserServiceService } from '../services/user-service.service';

import { NavController,ModalController } from '@ionic/angular';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-modal-vaca',
  templateUrl: './modal-vaca.page.html',
  styleUrls: ['./modal-vaca.page.scss'],
})
export class ModalVacaPage implements OnInit {

  constructor(public userService: UserServiceService,private nav:NavController,private modalCtrl:ModalController,public alertController: AlertController) { 

  }

  //Se define una variable array de tipo any
  users: any[] = [];
  buttonDisable: boolean[] = [];
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

async presentAlertConfirm(nombre,identificador) {
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
          this.buttonDisable[identificador]=true;
        }
      }
    ]
  });

  await alert.present();
}

}
