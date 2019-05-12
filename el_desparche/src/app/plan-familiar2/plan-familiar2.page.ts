import { Component, OnInit } from '@angular/core';
import {InvitacionesService} from '../services/invitaciones.service'
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';




@Component({
  selector: 'app-plan-familiar2',
  templateUrl: './plan-familiar2.page.html',
  styleUrls: ['./plan-familiar2.page.scss'],
})
export class PlanFamiliar2Page implements OnInit {

  public invitacion={
    'select':"",
    'local':"",
    'emailOwner':this.afAuth.auth.currentUser.email};
  constructor(public invitacionService:InvitacionesService,public alertController: AlertController,
    public toastController: ToastController,public afAuth: AngularFireAuth,private router: Router) { }

  ngOnInit() {
  }

  finalizarInvitacion(){
    this.confirmarInvitacion();
  }

  async confirmarInvitacion() {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: ' Esta será la invitación enviada: Cantidad de familiares: '+this.invitacionService.listadoInvitados.length+' familiares  Lugar: '+this.invitacion.local,
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
    if(this.invitacion.local!="" && this.invitacionService.listadoInvitados.length>0){
            this.invitacionService.setInvitacion(this.invitacion.local,this.invitacionService.listadoInvitados,this.invitacion.emailOwner,'Sin accion');
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
