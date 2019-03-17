import { Component } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';

import{
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  CameraPosition,
  MarkerOptions,
  Marker
  } from '@ionic-native/google-maps'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public geolocation:Geolocation, private googleMaps:GoogleMaps){

  }

  ngAfterViewInit() {
    this.geolocationNative();
  }


  geolocationNative(){
    this.geolocation.getCurrentPosition().then((geposition:Geoposition)=>{
        this.loadMap(geposition);
    })
  }

  loadMap(position){
    let element: HTMLElement = document.getElementById('map');
    let map: GoogleMap = this.googleMaps.create(element);
    let latlng = new LatLng(position.coords.latitude, position.coords.longitude);

    map.one(GoogleMapsEvent.MAP_READY).then(() => {
      let position: CameraPosition<LatLng> = {
        target: latlng,
        zoom: 20,
        tilt: 30
      };
      map.moveCamera(position);

      let markerOptions: MarkerOptions = {
        position: latlng,
        title: 'Aquí Estoy'
        };
      
      let marker = map.addMarker (markerOptions)
        .then((marker: Marker) =>{
          marker.showInfoWindow();
      });
    })
  }
}
