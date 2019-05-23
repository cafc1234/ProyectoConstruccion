import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

import { Geolocation } from '@ionic-native/geolocation/ngx';

import { IonicStorageModule } from '@ionic/storage';
import { FirebaseUIModule, firebase, firebaseui } from 'firebaseui-angular';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';


const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  tosUrl: '/terminos',
  privacyPolicyUrl: '/terminos',
  credentialHelper: firebaseui.auth.CredentialHelper.NONE
};



@NgModule({

  declarations: [AppComponent, ModalFamiliarPage, ModalVacaPage, ModalEventoPage, MenuItemComponent],
  entryComponents: [ModalFamiliarPage, ModalVacaPage, ModalEventoPage],

  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule, AngularFirestoreModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig), FormsModule],
  providers: [
    StatusBar,
    UserServiceService,
    SplashScreen,
    Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
