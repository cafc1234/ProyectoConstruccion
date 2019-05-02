import { Component, OnInit } from '@angular/core';
import {InvitacionesService} from '../services/invitaciones.service'

@Component({
  selector: 'app-invitaciones-familiares',
  templateUrl: './invitaciones-familiares.page.html',
  styleUrls: ['./invitaciones-familiares.page.scss'],
})
export class InvitacionesFamiliaresPage implements OnInit {

  public invitaciones:any=[];


  constructor(public invitacionService:InvitacionesService) { }

  ngOnInit() {
    this.invitacionService.getInvitaciones().subscribe(invitaciones=>{
      this.invitaciones=invitaciones;
});
  }

}
