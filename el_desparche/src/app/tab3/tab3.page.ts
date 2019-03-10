import { Component } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public geolocation:Geolocation){

  }

  ngAfterViewInit() {
    this.geolocationNative();
  }


  geolocationNative(){
    this.geolocation.getCurrentPosition().then((geposition:Geoposition)=>{
        console.log(geposition)
    })
  }
}
