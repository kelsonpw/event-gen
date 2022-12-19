import * as amplitude from "@amplitude/analytics-node";
import { faker } from "@faker-js/faker";

const createFakeUserProperties = () => {
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

const createFakeEventAndEventProperties = () => {
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

amplitude.init("API_KEY");
const logFakeEvent = () => {
  const userProperties = createFakeUserProperties();
  const event = createFakeEventAndEventProperties();

  return amplitude.logEvent({
    event_type: event.event_type,
    event_properties: event.event_properties,
    user_id: userProperties.user_id,
    user_properties: userProperties,
  }).promise;
};

let count = 0;

const startEventLogging = () => {
  const timer = setInterval(() => {
    console.log("total count", count);
    logFakeEvent()
      .then(() => {
        count++;
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, 2500);
};

startEventLogging();
