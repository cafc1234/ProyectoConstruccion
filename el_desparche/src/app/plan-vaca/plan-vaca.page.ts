import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalVacaPage } from '../modal-vaca/modal-vaca.page';
import {AmigosService,Amigo} from '../services/amigos.service';
import {InvitacionesVacaService} from '../services/invitaciones-vaca.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-plan-vaca',
  templateUrl: './plan-vaca.page.html',
  styleUrls: ['./plan-vaca.page.scss'],
})
export class PlanVacaPage implements OnInit {

  public amigos:any=[];
  public amigosInvitados: any[]=[];


  constructor(public toastController: ToastController, private router: Router,public modalController: ModalController,public amigosService:AmigosService,public invitacionVacaService:InvitacionesVacaService,public afAuth: AngularFireAuth,public alertController: AlertController) { }

 public valorVaca=0;

  ngOnInit() {
    this.amigosService.getAmigos().subscribe(amigos=>{
      this.amigos=amigos;
});
  }

  async toastError() {
    const toast = await this.toastController.create({
      message: 'El valor de la vaca debe ser superior a 0.',
      duration: 2000,
      color:'danger'
    });
    toast.present();
  }

      //Se encarga de mostrar el modal vaca
      async presentModalAmigos() {
        const modal = await this.modalController.create({
          component: ModalVacaPage,
          componentProps: { value: 123 }
        });
        return await modal.present();
      }

      botonDeshabilitado: boolean[] = [];

    async presentAlertConfirm(nombre,correo,identificador) {
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
              this.botonDeshabilitado[identificador]=true;
              this.amigosInvitados.push(correo);
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
        message: '¿Deseas enviar la invitación a '+this.amigosInvitados.length+' amigos ?',
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
              if(this.valorVaca>0){
                this.invitacionVacaService.listadoInvitados=this.amigosInvitados;
                this.invitacionVacaService.valorVaca=this.valorVaca;
                this.router.navigateByUrl('/plan-vaca2');            
              }else{
                this.toastError();
              }

            }
          }
        ]
      });
  
      await alert.present();
    }


}
