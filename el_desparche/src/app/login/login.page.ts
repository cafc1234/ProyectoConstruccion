import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private storage: Storage, public toastController: ToastController, public afAuth: AngularFireAuth) { }

  inicio = {
    'usuario': "",
    'clave': ""
  };

  ngOnInit() {
     
  }

  successCallback(signInSuccessData: FirebaseUISignInSuccessWithAuthResult) {
    ...
}

  async toastError() {
    const toast = await this.toastController.create({
      message: 'Los campos no pueden estar vacios.',
      duration: 2000,
      color: 'danger'
    });
    toast.present();
  }
  async toastErrorUsuario() {
    const toast = await this.toastController.create({
      message: 'El usuario o clave son incorrectos.',
      duration: 2000,
      color: 'danger'
    });
    toast.present();
  }

  obtenerUsuario(validarUsuario) {
    var valor = "";
    this.storage.get('usuario').then(function (val) {
      valor = val;
      validarUsuario(valor);
    });

  }

  obtenerClave(validarClave) {
    var valor = "";
    this.storage.get('clave').then(function (val) {
      valor = val;
      validarClave(valor);
    });
  }

  confirmarIngreso() {
    if (this.inicio.usuario == "" || this.inicio.clave == "") {
      this.toastError();
    } else {
      var inside=this;

      this.obtenerUsuario(function (usuario) {
        if (inside.inicio.usuario == usuario) {
          inside.obtenerClave(function (clave) {
            if (inside.inicio.clave == clave) {
              window.location.href = "nav";
            } else {
              inside.toastErrorUsuario();
            }
          });
        } else {
          inside.toastErrorUsuario();
        }
      })
    }
  }



}
