import { Component, OnInit } from '@angular/core';
// Se importa el servicio
import { UserServiceService } from '../services/user-service.service';

import { NavController,ModalController } from '@ionic/angular';


@Component({
  selector: 'app-modal-vaca',
  templateUrl: './modal-vaca.page.html',
  styleUrls: ['./modal-vaca.page.scss'],
})
export class ModalVacaPage implements OnInit {

  constructor(public userService: UserServiceService,private nav:NavController,private modalCtrl:ModalController) { 

  }

  //Se define una variable array de tipo any
  users: any[] = [];
  //Al cargar trae un servicio 
  ngOnInit() {
    this.userService.getUsers().subscribe(
      (data) => { // Success
      this.users = data['results'];
      },
      (error) =>{
      console.error(error);
      }
      )
}

closeModal()
{
  this.modalCtrl.dismiss();
}
}
