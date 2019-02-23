import { Component, OnInit } from '@angular/core';

import { NavController,ModalController } from '@ionic/angular';


@Component({
  selector: 'app-modal-disco',
  templateUrl: './modal-disco.page.html',
  styleUrls: ['./modal-disco.page.scss'],
})
export class ModalDiscoPage implements OnInit {

  constructor(private nav:NavController,private modalCtrl:ModalController) { }

  ngOnInit() {
  }

  closeModal()
{
  this.modalCtrl.dismiss();
}

}
