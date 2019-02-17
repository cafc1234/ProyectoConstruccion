import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
// Se importa el servicio
import { UserServiceService } from '../services/user-service.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  /*
  //Se define arreglo de tipo any
  users: any[] = [];

  //Se carga clase del import userService
  constructor(public userService: UserServiceService){
    
  }

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
}
    

