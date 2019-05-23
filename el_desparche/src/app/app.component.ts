import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

import { Platform,MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router,RouterEvent, NavigationEnd  } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';
import {Dialogs} from '@ionic-native/dialogs/ngx';






@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public isConnected:boolean;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public afAuth: AngularFireAuth,
    private router: Router,
    private menuCtrl: MenuController,
    public toastController: ToastController,
    public network:Network,
    public dialog:Dialogs
  ) {
    this.initializeApp();

    this.network.onDisconnect().subscribe(() =>{
           this.toastSinInternet();
    });
    this.network.onConnect().subscribe(() =>{
       setTimeout(()=>{
           this.toastConInternet();
      },2000);
    });
  }

  pages = [
    {
      title: 'Home',
      url: '/nav',
      icon: 'home'
    },{
      title: 'Planes',
      url: '/nav/tabs/tab2',
      icon: 'md-calendar'
    },{
      title: 'Mis invitaciones',
      url: '/invitaciones-familiares',
      icon: 'mail'
    },
    {
      title: 'Cerrar sesión',
      url: '/cerrar-sesion',
      icon: 'open'
    }

 
  ];



  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {




    this.afAuth.authState.subscribe(user => {
      if (!user) {
        if(this.router.url != '/'        )
        window.location.href = "/";
      }
    });
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd && event.url === '/') {
        this.menuCtrl.enable(false);
      }
    }); 
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        this.pages.map( p => {
          return p['active'] = (event.url === p.url);
        });
      }
    });

  }

  async toastSinInternet() {
    const toast = await this.toastController.create({
      message: 'Sin conexión a internet, por favor verifica tu conexión, algunas opciones no funcionarán de forma correcta.',
      duration: 3000,
      color:'danger'
    });
    toast.present();
  }

  async toastConInternet() {
    const toast = await this.toastController.create({
      message: 'Otra vez te encuentras en línea.',
      duration: 3000,
      color:'success'
    });
    toast.present();
  }




}
