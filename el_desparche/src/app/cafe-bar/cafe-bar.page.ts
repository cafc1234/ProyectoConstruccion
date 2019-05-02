import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-cafe-bar',
  templateUrl: './cafe-bar.page.html',
  styleUrls: ['./cafe-bar.page.scss'],
})
export class CafeBarPage implements OnInit {

  constructor(public userService: UserServiceService) {
    this.initializeItems();
  }

  searchQuery: string = '';
  items: string[];

  initializeItems() {
    this.items = [
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

  getItems(ev: any) {
    this.initializeItems();
    const val = ev.target.value;

    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  ngOnInit() {
  }

}
