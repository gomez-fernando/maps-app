import  faker  from "faker";
import { Mappable } from './CustomMap';

export class Driver implements Driver {
  name: string;
  lastName: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

  constructor() {
    this.name = faker.name.firstName(0);
    this.lastName = faker.name.lastName(0);
    this.location = {
      lat: parseFloat(faker.address.latitude(60, 10, 4)),
      lng: parseFloat(faker.address.longitude(90, 10, 4))
    }
  }

  markerContent(): string{
    return `<strong>Driver:</strong> ${this.name} ${this.lastName}`
  }
}
