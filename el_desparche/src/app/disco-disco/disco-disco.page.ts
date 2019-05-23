import { Component, OnInit } from '@angular/core';
import {DiscoService} from '../services/disco.service'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-disco-disco',
  templateUrl: './disco-disco.page.html',
  styleUrls: ['./disco-disco.page.scss'],
})
export class DiscoDiscoPage implements OnInit {

  public disco:any=[];


  constructor(public discoService:DiscoService,public alertController: AlertController) { }

  ngOnInit() {
    this.discoService.getDisco('salsa').subscribe(disco=>{
      this.disco=disco;
});

}}