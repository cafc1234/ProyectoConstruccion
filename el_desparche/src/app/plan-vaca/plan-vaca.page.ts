import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalVacaPage } from '../modal-vaca/modal-vaca.page';
import {AmigosService,Amigo} from '../services/amigos.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-plan-vaca',
  templateUrl: './plan-vaca.page.html',
  styleUrls: ['./plan-vaca.page.scss'],
})
export class PlanVacaPage implements OnInit {

  public amigos:any=[];
  public amigosInvitados: any[]=[];


  constructor(public modalController: ModalController,public amigosService:AmigosService,public afAuth: AngularFireAuth,public alertController: AlertController) { }

  ngOnInit() {
    this.amigosService.getAmigos().subscribe(amigos=>{
      this.amigos=amigos;
});
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
              console.log(identificador);
            }
          }
        ]
      });
  
      await alert.present();
    }


}
