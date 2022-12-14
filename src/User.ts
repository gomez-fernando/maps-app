import  faker  from "faker";
import { Mappable } from './CustomMap';

export class User implements Mappable{
  name: string;
  lastName: string;
  location: {
    lat: number;
    lng: number;
  };
  icon: string = "http://maps.google.com/mapfiles/ms/icons/red-dot.png"

  constructor() {
    this.name = faker.name.firstName(0);
    this.lastName = faker.name.lastName(0);
    this.location = {
      lat: parseFloat(faker.address.latitude(43.26034, 36.84531, 4)),
      lng: parseFloat(faker.address.longitude(-0.63242, -8.8, 4))
    }
  }

  markerContent(): string{
    return `<strong>Passenger:</strong> ${this.name} ${this.lastName}`
  }
}
