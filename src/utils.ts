import { faker } from "@faker-js/faker";

export const API_KEY = "46f7cb32e8c439edfc1b7663b79d2999";

export const createFakeUserProperties = () => {
  const userProperties = {
    name: faker.name.firstName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    address: faker.address.streetAddress(),
    avatar: faker.image.avatar(),
    ip: faker.internet.ip(),
    browser: faker.internet.userAgent(),
    referrer: faker.internet.url(),
    language: faker.internet.url(),
    device: faker.internet.userAgent(),
    deviceId: faker.internet.mac(),
    userId: faker.random.alphaNumeric(10),
    device_id: faker.internet.mac(),
    user_id: faker.random.alphaNumeric(10),
    time: faker.date.past().getTime(),
    os_name: faker.internet.userAgent(),
    os_version: faker.random.numeric(2),
  };

  return userProperties;
};

export const createFakeEventAndEventProperties = () => {
  const eventProperties = {
    name: faker.name.firstName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    zip: faker.address.zipCode(),
    country: faker.address.country(),
    company: faker.company.name(),
    job: faker.name.jobTitle(),
    avatar: faker.image.avatar(),
    ip: faker.internet.ip(),
    browser: faker.internet.userAgent(),
    referrer: faker.internet.url(),
    language: faker.internet.url(),
    device: faker.internet.userAgent(),
  };
  const event = {
    event_type: faker.hacker.verb() + " " + faker.hacker.noun(),
    event_properties: eventProperties,
  };
  return event;
};
