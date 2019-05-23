import { Component, OnInit } from '@angular/core';
import {InvitacionesService} from '../services/invitaciones.service'
import {InvitacionesVacaService} from '../services/invitaciones-vaca.service'

import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-invitaciones-familiares',
  templateUrl: './invitaciones-familiares.page.html',
  styleUrls: ['./invitaciones-familiares.page.scss'],
})
export class InvitacionesFamiliaresPage implements OnInit {

  public invitaciones:any=[];
  public invitacionesAmigos:any=[];

  constructor(public invitacionVacaService:InvitacionesVacaService,public invitacionService:InvitacionesService,public alertController: AlertController) { }

  ngOnInit() {
    this.invitacionService.getInvitaciones().subscribe(invitaciones=>{
      this.invitaciones=invitaciones;
});
this.invitacionVacaService.getInvitaciones().subscribe(invitaciones=>{
  this.invitacionesAmigos=invitaciones;
});
  }
  cancelarInvitacion(idInvitacion){
    this.presentAlertConfirm(idInvitacion)  
  }

  cancelarInvitacionAmigo(idInvitacion){
    this.presentAlertConfirmAmigo(idInvitacion)  
  }




  async presentAlertConfirm(idInvitacion) {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Deseas cancelar esta invitación?',
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
            this.invitacionService.deleteInvitacion(idInvitacion);
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertConfirmAmigo(idInvitacion) {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Deseas cancelar esta invitación?',
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
this.invitacionVacaService.deleteInvitacion(idInvitacion);
          }
        }
      ]
    });

    await alert.present();
  }

}
