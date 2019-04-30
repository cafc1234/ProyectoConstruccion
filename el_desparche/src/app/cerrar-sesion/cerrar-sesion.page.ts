import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-cerrar-sesion',
  templateUrl: './cerrar-sesion.page.html',
  styleUrls: ['./cerrar-sesion.page.scss'],
})
export class CerrarSesionPage implements OnInit {

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  cerrarSesion(){
    this.afAuth.auth.signOut().then(()=>{
      window.location.href = "/";
    })
  }

}
