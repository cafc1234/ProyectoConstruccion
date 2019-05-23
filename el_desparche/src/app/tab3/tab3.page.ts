import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
declare var google;

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit, AfterContentInit {
  map;
  @ViewChild('mapElement') mapElement;

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

  ngOnInit(): void{
    
  }

  ngAfterContentInit(): void {
    this.map = new google.maps.Map(
        this.mapElement.nativeElement,
        {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
  }
}
