import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalVacaPage } from '../modal-vaca/modal-vaca.page';
import {AmigosService,Amigo} from '../services/amigos.service';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-plan-vaca',
  templateUrl: './plan-vaca.page.html',
  styleUrls: ['./plan-vaca.page.scss'],
})
export class PlanVacaPage implements OnInit {

  public amigos:any=[];

  constructor(public modalController: ModalController,public amigosService:AmigosService,public afAuth: AngularFireAuth) { }

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

}
