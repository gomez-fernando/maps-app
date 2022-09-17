import  faker  from "faker";
import { Mappable } from './CustomMap';

export class Destination implements Mappable{
  destination: string;
  location: {
    lat: number;
    lng: number;
  };
  icon: string = "http://maps.google.com/mapfiles/kml/pal2/icon2.png"

  constructor() {
    this.destination = 'Home'
    this.location = {
      lat: parseFloat(faker.address.latitude(43.26034, 36.84531, 4)),
      lng: parseFloat(faker.address.longitude(-0.63242, -8.8, 4))
    }
  }

  markerContent(): string{
    return `<strong>Destination:</strong> ${this.destination}`
  }
}
