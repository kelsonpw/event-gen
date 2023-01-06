import * as amplitude from "@amplitude/analytics-node";
import {
  API_KEY,
  createFakeEventAndEventProperties,
  createFakeUserProperties,
} from "./utils";

amplitude.init(API_KEY);

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
  logFakeEvent()
    .then(() => {
      count++;
    })
    .catch((err) => {
      console.log("error", err);
    });
};

const logFakeEventsForEvery30Seconds = () => {
  const timer = setInterval(() => {
    console.log("total count", count);
    startEventLogging();
  }, 2500);
};

logFakeEventsForEvery30Seconds();
