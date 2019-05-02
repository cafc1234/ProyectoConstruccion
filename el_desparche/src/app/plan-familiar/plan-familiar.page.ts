import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalFamiliarPage } from '../modal-familiar/modal-familiar.page';
import {FamiliaresService,Familiar} from '../services/familiares.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';
import{InvitacionesService} from '../services/invitaciones.service'
import { Router } from '@angular/router';




@Component({
  selector: 'app-plan-familiar',
  templateUrl: './plan-familiar.page.html',
  styleUrls: ['./plan-familiar.page.scss'],
})
export class PlanFamiliarPage implements OnInit {

  public familiares:any=[];
  public familiaresInvitados: any[]=[];
  constructor(public modalController: ModalController, public familiaresService:FamiliaresService,
    public afAuth: AngularFireAuth,public alertController: AlertController, 
    public invitacionesService:InvitacionesService,private router: Router) { }

  ngOnInit() {
    this.familiaresService.getFamiliares().subscribe(familiares=>{
           this.familiares=familiares;

     });
  }

    //Se encarga de mostrar el modal familiar
    async presentModalFamiliar() {
      const modal = await this.modalController.create({
        component: ModalFamiliarPage,
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
              this.familiaresInvitados.push(correo);
              console.log(identificador);
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
        message: '¿Deseas enviar la invitación a '+this.familiaresInvitados.length+' familiares ?',
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
              this.invitacionesService.listadoInvitados=this.familiaresInvitados;
              this.router.navigateByUrl('/plan-familiar2');
            }
          }
        ]
      });
  
      await alert.present();
    }

}
