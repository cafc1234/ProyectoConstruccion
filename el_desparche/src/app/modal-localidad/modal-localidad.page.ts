import { Component, OnInit } from '@angular/core';
import { NavController,ModalController } from '@ionic/angular';


@Component({
  selector: 'app-modal-localidad',
  templateUrl: './modal-localidad.page.html',
  styleUrls: ['./modal-localidad.page.scss'],
})
export class ModalLocalidadPage implements OnInit {

  constructor(private nav:NavController,private modalCtrl:ModalController) { }

  ngOnInit() {
  }

  closeModal()
{
  this.modalCtrl.dismiss();
}


}
