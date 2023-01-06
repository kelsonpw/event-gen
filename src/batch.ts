import { faker } from "@faker-js/faker";
import {
  API_KEY,
  createFakeEventAndEventProperties,
  createFakeUserProperties,
} from "./utils";

const BATCH_API = "https://api2.amplitude.com/batch";

const createBatchEvents = (size: number) => {
  return Array.from({ length: size }, () => {
    const event = createFakeEventAndEventProperties();
    const userProperties = createFakeUserProperties();

    return {
      user_id: userProperties.user_id,
      device_id: userProperties.device_id,
      event_type: event.event_type,
      time: faker.date.past().getTime(),
      event_properties: event.event_properties,
      user_properties: userProperties,
    };
  });
};

const sendBatch = (size: number) => {
  const events = createBatchEvents(size);

  const body = {
    api_key: API_KEY,
    events,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  return fetch(BATCH_API, options);
};

const size = process.argv.slice(2)[0]!;

if (!size) {
  throw new Error(
    "You must provide a batch size when running `yarn batch`, i.e. `yarn batch 10`"
  );
}

console.log("Sending batch of size", size);

sendBatch(Number(size)).then(
  (res) => {
    res.json().then((json) => {
      console.log(json);
    });
  },
  (err) => {
    console.log(err);
  }
);
