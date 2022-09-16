/// <reference types="@types/google.maps" />


import {User} from './User';
import {Driver} from './Driver';

export class CustomMap{
  private googleMap: google.maps.Map;

  constructor(divId: string){
    this.googleMap = new google.maps.Map(document.querySelector(divId) as HTMLElement, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    })
  }

  addUserMarker(user: User){
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      }
    })
  }

  addDriverMarker(driver: Driver){

  }
}