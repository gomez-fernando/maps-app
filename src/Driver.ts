import  faker  from "faker";

export class Driver {
  name: string;
  lastName: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName(0);
    this.name = faker.name.lastName(0);
    this.location = {
      lat: parseFloat(faker.address.latitude(60, 10, 4)),
      lng: parseFloat(faker.address.longitude(90, 10, 4))
    }
  }
}
