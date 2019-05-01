import { Component, OnInit } from '@angular/core';
import { NavController,ModalController } from '@ionic/angular';
// Se importa el servicio
import { UserServiceService } from '../services/user-service.service';



@Component({
  selector: 'app-modal-tienda',
  templateUrl: './modal-tienda.page.html',
  styleUrls: ['./modal-tienda.page.scss'],
})
export class ModalTiendaPage implements OnInit {

  searchQuery: string ='';
  items: string[];

  constructor(public userService: UserServiceService, public nav:NavController, public modalCtrl:ModalController) { 
    this.initializeItems();
  }

  initializeItems(){
    this.items=[
      'Usaquén',
      'Chapinero', 
      'Santa Fe', 
      'San Cristóbal',
      'Barrios Unidos',
      'Engativá',
      'Kennedy',
      'Fontibón',
      'Bosa',
      'Ciudad Bolívar',
      'Suba',
      'Teusaquillo',
      'Los Mártires',
      'Antonio Nariño',
      'La Candelaria',
      'Sumapaz',
      'Rafael Uribe Uribe',
      'Tunjuelito'
    ];
  }

  getItems(ev: any){
    this.initializeItems();
    const val = ev.target.value;

    if(val && val.trim() != ''){
      this.items = this.items.filter((item) => {
        return(item.toLowerCase().indexOf(val.toLowerCase())>-1);
      })
    }
  }

  ngOnInit() {
  }

  closeModal() {
  this.modalCtrl.dismiss();
  window.location.href = "nav";
  }
}