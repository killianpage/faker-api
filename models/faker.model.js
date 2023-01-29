//front end ES Module 6
// import { faker } from '@faker-js/faker';
const { faker } = require("@faker-js/faker");

class User {
  constructor() {
    this.id = faker.database.mongodbObjectId();
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
    this.phoneNumber = faker.phone.number();
  }
}

class Company {
  constructor() {
    this.id = faker.database.mongodbObjectId();
    this.name = faker.company.name();
    this.address = {
      address: faker.address.buildingNumber(),
      street: faker.address.street(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country(),
    };
  }
}

module.exports = { User, Company };
