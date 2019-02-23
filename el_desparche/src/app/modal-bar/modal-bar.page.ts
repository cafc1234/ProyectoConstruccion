import { Component, OnInit } from '@angular/core';

import { NavController,ModalController } from '@ionic/angular';


@Component({
  selector: 'app-modal-bar',
  templateUrl: './modal-bar.page.html',
  styleUrls: ['./modal-bar.page.scss'],
})
export class ModalBarPage implements OnInit {

  constructor(private nav:NavController,private modalCtrl:ModalController) { }

  ngOnInit() {
  }

  closeModal()
  {
    this.modalCtrl.dismiss();
  }

}
