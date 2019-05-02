import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
// Se importa el servicio
import { UserServiceService } from '../services/user-service.service';
import { ModalController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  constructor(public userService: UserServiceService, public afAuth: AngularFireAuth ){
  
  }
  
}
