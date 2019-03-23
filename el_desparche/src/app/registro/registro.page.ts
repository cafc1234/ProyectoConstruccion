import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario={'nombre':"",
          'apellido':"",
          'usuario':"",
          'email':"",
          'clave':""   
        };

  constructor(public toastController: ToastController,private storage: Storage) { }


  async toastError() {
    const toast = await this.toastController.create({
      message: 'Debe completar todo el formulario para poder registrarse.',
      duration: 2000,
      color:'danger'
    });
    toast.present();
  }


  guardarStorage(redirecciona){
      this.storage.set('nombre', this.usuario.nombre);
      this.storage.set('apellido', this.usuario.apellido);
      this.storage.set('email', this.usuario.email);
      this.storage.set('usuario', this.usuario.usuario);
      this.storage.set('clave', this.usuario.clave);
      redirecciona();
  }
  ngOnInit() {
  }
  //Función encargada de guardar el registro de un usuario
  guardarRegistro(){
    if(this.usuario.nombre=="" || this.usuario.apellido=="" || 
       this.usuario.email=="" || this.usuario.usuario=="" || this.usuario.clave==""){
        this.toastError();
       }else{
        this.guardarStorage(function(){
          window.location.href = "";

        });

       }
  }

}
