import { Component, OnInit } from '@angular/core';
import {InvitacionesVacaService} from '../services/invitaciones-vaca.service'
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-plan-vaca2',
  templateUrl: './plan-vaca2.page.html',
  styleUrls: ['./plan-vaca2.page.scss'],
})
export class PlanVaca2Page implements OnInit {

  public invitacion={
    'select':"",
    'local':"",
    'emailOwner':this.afAuth.auth.currentUser.email};

  constructor(public invitacionVacaService:InvitacionesVacaService,public alertController: AlertController,
    public toastController: ToastController,public afAuth: AngularFireAuth,private router: Router) { }

  ngOnInit() {
    console.log(this.invitacionVacaService.listadoInvitados);
    console.log(this.invitacionVacaService.valorVaca);
  }

  finalizarInvitacion(){
    this.confirmarInvitacion();
  }

  async confirmarInvitacion() {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: ' Esta será la invitación enviada: Cantidad de amigos: '+this.invitacionVacaService.listadoInvitados.length+' amigos  Lugar: '+this.invitacion.local+ '<br>Valor de la vaca:'+this.invitacionVacaService.valorVaca,
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
                this.guardarData();
          }
        }
      ]
    });

    await alert.present();
  }

  guardarData(){
    if(this.invitacion.local!="" && this.invitacionVacaService.listadoInvitados.length>0){
            this.invitacionVacaService.setInvitacion(this.invitacion.local,this.invitacionVacaService.listadoInvitados,this.invitacion.emailOwner,'Sin accion',this.invitacionVacaService.valorVaca);
            this.toastExito();
            this.router.navigateByUrl('/invitaciones-familiares');

          }else{
      this.toastError();
    }
  }
  async toastError() {
    const toast = await this.toastController.create({
      message: 'Debe completar todo el formulario para poder enviar la invitación.',
      duration: 2000,
      color:'danger'
    });
    toast.present();
  }
  async toastExito() {
    const toast = await this.toastController.create({
      message: 'Se agregó correctamente la invitacion.',
      duration: 2000,
      color:'success'
    });
    toast.present();
  }

}
