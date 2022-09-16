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

  addUserMarker(){

  }

  addDriverMarker(){

  }
}