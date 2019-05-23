import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';


@Injectable({
  providedIn: 'root'
})
export class InternetService {


  constructor(public network: Network) {

    }

 estadoInternet() {
  // watch network for a disconnection
return this.network.onDisconnect().subscribe(() => {
  console.log('network was disconnected :-(');
});

}

    
}
