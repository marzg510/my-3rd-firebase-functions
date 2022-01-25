const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.echo = functions.https.onRequest((request, response) => {
  functions.logger.info("called echo", {structuredData: true});
  response.send(request.body);
});
