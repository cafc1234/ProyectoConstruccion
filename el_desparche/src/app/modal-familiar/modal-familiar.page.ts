import { Component, OnInit } from '@angular/core';

import { NavController,ModalController } from '@ionic/angular';

import { AlertController } from '@ionic/angular';

import {FamiliaresService,Familiar} from '../services/familiares.service';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';




@Component({
  selector: 'app-modal-familiar',
  templateUrl: './modal-familiar.page.html',
  styleUrls: ['./modal-familiar.page.scss'],
})
export class ModalFamiliarPage implements OnInit {

  constructor(
    private nav:NavController,private modalCtrl:ModalController,
    public alertController: AlertController,  public familiaresService:FamiliaresService,
    public toastController: ToastController,public afAuth: AngularFireAuth) { }
  //Se define una variable array de tipo any
  //users: any[] = [];
  //amigos: any[]=[];

  //buttonDisable: boolean[] = [];
  //Al cargar trae un servicio

 familiar:Familiar={
   nombreFamiliar:"",
   correo:"",
   celular:"",
   correoOwner:this.afAuth.auth.currentUser.email
 };


  ngOnInit() {
    
   /* this.userService.getUsers().subscribe(
      (data) => { // Success
      this.users = data['results'];
      },
      (error) =>{
      console.error(error);
      }
      )*/
  }

  closeModal() {
    this.modalCtrl.dismiss();
    }

    guardarData(){
       if(this.familiar.celular=="" || this.familiar.nombreFamiliar=="" || this.familiar.correo==""){
        this.toastError();
       }else{
           this.familiaresService.setFamiliar(this.familiar.nombreFamiliar,this.familiar.celular,this.familiar.correo, this.familiar.correoOwner);
           this.toastExito();
           this.closeModal();
       }

    }

    async toastError() {
      const toast = await this.toastController.create({
        message: 'Debe completar todo el formulario para poder agregar al familiar.',
        duration: 2000,
        color:'danger'
      });
      toast.present();
    }

    async toastExito() {
      const toast = await this.toastController.create({
        message: 'Se agregó correctamente al familiar.',
        duration: 2000,
        color:'success'
      });
      toast.present();
    }
/*
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

*/
}
