import { Component } from '@angular/core';

import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-localidad',
  templateUrl: 'localidad.page.html',
  styleUrls: ['localidad.page.scss']
})

  export class LocalidadPage {
    constructor(public userService: UserServiceService){
  
    }


  }
  

 

