import { Component } from '@angular/core';

import { Platform,MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router,RouterEvent, NavigationEnd  } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public afAuth: AngularFireAuth,
    private router: Router,
    private menuCtrl: MenuController
  ) {
    this.initializeApp();
  }

  pages = [
    {
      title: 'Login',
      url: '/login',
      icon: 'log-in'
    },
    {
      title: 'Contact',
      url: '/tabs/contact',
      icon: 'person'
    },
    {
      title: 'terminos',
      url: '/terminos',
      icon: 'information-circle'
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


}
