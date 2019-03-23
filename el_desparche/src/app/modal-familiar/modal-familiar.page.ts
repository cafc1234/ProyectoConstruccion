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
  amigos: any[]=[];

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

  continuar(){
    this.confirmarInvitados();
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
            this.amigos.push(nombre);
          }
        }
      ]
    });

    await alert.present();
  }


  async confirmarInvitados() {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Deseas enviar la invitación a '+this.amigos.length+' personas ?',
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
           console.log(this.amigos);
          }
        }
      ]
    });

    await alert.present();
  }


}
