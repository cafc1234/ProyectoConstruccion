import { Component, OnInit } from '@angular/core';

import { NavController,ModalController } from '@ionic/angular';


@Component({
  selector: 'app-modal-evento',
  templateUrl: './modal-evento.page.html',
  styleUrls: ['./modal-evento.page.scss'],
})
export class ModalEventoPage implements OnInit {

  constructor(private nav:NavController,private modalCtrl:ModalController) { }

  ngOnInit() {
  }

  closeModal()
{
  this.modalCtrl.dismiss();
}

}
