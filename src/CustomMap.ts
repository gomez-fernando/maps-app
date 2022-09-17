/// <reference types="@types/google.maps" />

export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  icon: string;
}  

export class CustomMap{
  private googleMap: google.maps.Map;

  constructor(divId: string){
    this.googleMap = new google.maps.Map(document.querySelector(divId) as HTMLElement, {
      zoom: 6.8,
      center: {
        lat: 40,
        lng: -3.70882
        // lat: 45.74595,
        // lng: 4.73055
      }
    })
  }

  addMarker(mappable: Mappable): void{
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
      icon: {
        
        url: mappable.icon
        
      }
    });

    marker.addListener('click', ()=>{
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      })

      infoWindow.open(this.googleMap as google.maps.Map, marker as google.maps.Marker)
    })
  }

}