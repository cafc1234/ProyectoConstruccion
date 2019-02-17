import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
// Se importa el servicio
import { UserServiceService } from '../services/user-service.service';
import { ModalController } from '@ionic/angular';
import { ModalFamiliarPage } from '../modal-familiar/modal-familiar.page';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(public userService: UserServiceService,public modalController: ModalController){
  
  }
  //Se encarga de mostrar el modal familiar
  async presentModalFamiliar() {
    const modal = await this.modalController.create({
      component: ModalFamiliarPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }
}

  /*
  //Se define arreglo de tipo any
  users: any[] = [];

  //Se carga clase del import userService
 

  //Cuando cargue Ionic
  loadUser(){
    this.userService.getUsers().subscribe(
    (data) => { // Success
    this.users = data['results'];
    },
    (error) =>{
    console.error(error);
    }
    )
    
  }
  */

    

