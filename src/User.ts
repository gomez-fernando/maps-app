import  faker  from "faker";

export class User {
  name: string;
  lastName: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName(0);
    this.lastName = faker.name.lastName(0);
    this.location = {
      lat: parseFloat(faker.address.latitude(60, 10, 4)),
      lng: parseFloat(faker.address.longitude(90, 10, 4))
    }
  }

  markerContent(): string{
    return `<strong>Passenger:</strong> ${this.name} ${this.lastName}`
  }
}
