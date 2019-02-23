import { Component, OnInit } from '@angular/core';

import { NavController,ModalController } from '@ionic/angular';




@Component({
  selector: 'app-modal-almacen',
  templateUrl: './modal-almacen.page.html',
  styleUrls: ['./modal-almacen.page.scss'],
})
export class ModalAlmacenPage implements OnInit {

  constructor(private nav:NavController,private modalCtrl:ModalController) { }

  ngOnInit() {
  }


  closeModal()
  {
    this.modalCtrl.dismiss();
  }

}

