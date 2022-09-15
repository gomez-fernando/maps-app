import  faker  from "faker";

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName('name.lastName company.companySuffix');
    this.catchPhrase = faker.company.catchPhrase()
    this.location = {
      lat: parseFloat(faker.address.latitude(60, 10, 4)),
      lng: parseFloat(faker.address.longitude(90, 10, 4))
    }
  }
}
