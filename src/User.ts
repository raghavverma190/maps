import { faker } from '@faker-js/faker';

class User {
  name: String;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {}
}
