// Chai is a commonly used library for creating unit test suites.
// It is easily extended with plugins.
const chai = require("chai");
const assert = chai.assert;
// const test = require('firebase-functions-test')({
// databaseURL: 'https://my-3rd-firebase-functions.firebaseio.com',
// storageBucket: 'my-3rd-firebase-functions.appspot.com',
// projectId: 'my-3rd-firebase-functions',
// }, 'my-3rd-firebase-functions-key.json');

describe("Cloud Functions", () => {
  let myFunctions;

  before(() => {
    // Require index.js and save the exports inside a namespace called
    // myFunctions.
    // This includes our cloud functions, which can now be accessed at
    // myFunctions.makeUppercase and myFunctions.addMessage
    myFunctions = require("../index");
  });

  after(() => {
    // Do cleanup tasks.
    // test.cleanup();
    // Reset the database.
    // admin.database().ref('messages').remove();
  });

  describe("helloWorld", () => {
    it("should return message", (done) => {
      const req = {query: {text: "input"}};
      const res = {
        send: (msg) => {
          // Assert msg is 303
          const expectedMsg = new RegExp("^Hello");
          assert.isTrue(expectedMsg.test(msg));
          done();
        },
      };

      // Invoke addMessage with our fake request and response objects.
      // This will cause the assertions in the response object to be evaluated.
      myFunctions.helloWorld(req, res);
    });
  });
});

