import { Component, OnInit } from '@angular/core';
// Se importa el servicio

import { NavController,ModalController } from '@ionic/angular';

import { AlertController } from '@ionic/angular';

import {AmigosService,Amigo} from '../services/amigos.service';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-modal-vaca',
  templateUrl: './modal-vaca.page.html',
  styleUrls: ['./modal-vaca.page.scss'],
})
export class ModalVacaPage implements OnInit {

  amigo:Amigo={
    nombreAmigo:"",
    correoAmigo:"",
    celularAmigo:"",
    correoOwner:this.afAuth.auth.currentUser.email
  };

  constructor(private nav:NavController,private modalCtrl:ModalController,public alertController: AlertController,public amigosService:AmigosService,
    public toastController: ToastController,public afAuth: AngularFireAuth) { 

  }

  ngOnInit() {


    }


closeModal()
{
  this.modalCtrl.dismiss();
}
guardarData(){
  if(this.amigo.celularAmigo=="" || this.amigo.nombreAmigo=="" || this.amigo.correoAmigo==""){
   this.toastError();
  }else{
      this.amigosService.setAmigo(this.amigo.nombreAmigo,this.amigo.celularAmigo,this.amigo.correoAmigo, this.amigo.correoOwner);
      this.toastExito();
      this.closeModal();
  }

}

async toastError() {
  const toast = await this.toastController.create({
    message: 'Debe completar todo el formulario para poder agregar a tu amigo.',
    duration: 2000,
    color:'danger'
  });
  toast.present();
}

async toastExito() {
  const toast = await this.toastController.create({
    message: 'Se agregó correctamente a tu amigo.',
    duration: 2000,
    color:'success'
  });
  toast.present();
}


/*
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
continuar(){
  this.confirmarInvitados();
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
          if(this.vaca.valor!==null || this.vaca.valor>0){
            console.log('es valido');
          } else{
            console.log('no es valido');
          }
        }
      }
    ]
  });

  await alert.present();
}
*/
}
