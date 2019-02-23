import { Component, OnInit } from '@angular/core';

import { NavController,ModalController } from '@ionic/angular';


@Component({
  selector: 'app-modal-tienda',
  templateUrl: './modal-tienda.page.html',
  styleUrls: ['./modal-tienda.page.scss'],
})
export class ModalTiendaPage implements OnInit {

  constructor(private nav:NavController,private modalCtrl:ModalController) { }

  ngOnInit() {
  }

  closeModal()
{
  this.modalCtrl.dismiss();
}


}
