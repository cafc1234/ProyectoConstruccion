import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { UserServiceService } from './services/user-service.service';
import { ModalFamiliarPage } from './modal-familiar/modal-familiar.page';
import { ModalVacaPage } from './modal-vaca/modal-vaca.page';
import { ModalEventoPage } from './modal-evento/modal-evento.page';


import { ModalAlmacenPage } from './modal-almacen/modal-almacen.page';
import { ModalTiendaPage } from './modal-tienda/modal-tienda.page';
import { ModalBarPage } from './modal-bar/modal-bar.page';
import { ModalDiscoPage } from './modal-disco/modal-disco.page';
import { ModalLocalidadPage } from './modal-localidad/modal-localidad.page';

import { Geolocation } from '@ionic-native/geolocation/ngx';

import { IonicStorageModule } from '@ionic/storage';



@NgModule({

  declarations: [AppComponent,ModalFamiliarPage,ModalVacaPage,ModalAlmacenPage,ModalTiendaPage,ModalBarPage,ModalDiscoPage,ModalEventoPage],
  entryComponents: [ModalFamiliarPage,ModalVacaPage,ModalAlmacenPage,ModalTiendaPage,ModalBarPage,ModalDiscoPage,ModalLocalidadPage,ModalEventoPage],

  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    UserServiceService,
    SplashScreen,
    Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
