"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var amplitude = require("@amplitude/analytics-node");
var faker_1 = require("@faker-js/faker");
var createFakeUserProperties = function () {
    var userProperties = {
        name: faker_1.faker.name.firstName(),
        email: faker_1.faker.internet.email(),
        phone: faker_1.faker.phone.number(),
        address: faker_1.faker.address.streetAddress(),
        city: faker_1.faker.address.city(),
        state: faker_1.faker.address.state(),
        zip: faker_1.faker.address.zipCode(),
        country: faker_1.faker.address.country(),
        company: faker_1.faker.company.name(),
        job: faker_1.faker.name.jobTitle(),
        avatar: faker_1.faker.image.avatar(),
        ip: faker_1.faker.internet.ip(),
        browser: faker_1.faker.internet.userAgent(),
        referrer: faker_1.faker.internet.url(),
        language: faker_1.faker.internet.url(),
        device: faker_1.faker.internet.userAgent(),
        deviceId: faker_1.faker.internet.mac(),
        userId: faker_1.faker.random.alphaNumeric(10),
        device_id: faker_1.faker.internet.mac(),
        user_id: faker_1.faker.random.alphaNumeric(10)
    };
    var fakeUserProperties = {
        user_id: faker_1.faker.random.alphaNumeric(10),
        device_id: faker_1.faker.internet.mac(),
        time: faker_1.faker.date.past().getTime(),
        os_name: faker_1.faker.internet.userAgent(),
        os_version: faker_1.faker.random.numeric(2),
        ip: faker_1.faker.internet.ipv4()
    };
    return __assign(__assign({}, userProperties), fakeUserProperties);
};
var createFakeEventAndEventProperties = function () {
    var eventProperties = {
        name: faker_1.faker.name.firstName(),
        email: faker_1.faker.internet.email(),
        phone: faker_1.faker.phone.number(),
        address: faker_1.faker.address.streetAddress(),
        city: faker_1.faker.address.city(),
        state: faker_1.faker.address.state(),
        zip: faker_1.faker.address.zipCode(),
        country: faker_1.faker.address.country(),
        company: faker_1.faker.company.name(),
        job: faker_1.faker.name.jobTitle(),
        avatar: faker_1.faker.image.avatar(),
        ip: faker_1.faker.internet.ip(),
        browser: faker_1.faker.internet.userAgent(),
        referrer: faker_1.faker.internet.url(),
        language: faker_1.faker.internet.url(),
        device: faker_1.faker.internet.userAgent(),
        deviceId: faker_1.faker.internet.mac(),
        userId: faker_1.faker.random.alphaNumeric(10),
        device_id: faker_1.faker.internet.mac(),
        user_id: faker_1.faker.random.alphaNumeric(22)
    };
    var event = {
        event_type: faker_1.faker.hacker.verb() + " " + faker_1.faker.hacker.noun(),
        event_properties: eventProperties
    };
    return event;
};
amplitude.init("17212d4f3a7e6d10284786dde49d903b");
var logFakeEvent = function () {
    var userProperties = createFakeUserProperties();
    var event = createFakeEventAndEventProperties();
    return amplitude.logEvent({
        event_type: event.event_type,
        event_properties: event.event_properties,
        user_id: userProperties.user_id,
        user_properties: userProperties
    }).promise;
};
var count = 0;
var startEventLogging = function () {
    logFakeEvent()
        .then(function () {
        count++;
    })["catch"](function (err) {
        console.log("error", err);
    });
};
var logFakeEventsForEvery30Seconds = function () {
    var timer = setInterval(function () {
        console.log("total count", count);
        startEventLogging();
    }, 2500);
};
logFakeEventsForEvery30Seconds();
