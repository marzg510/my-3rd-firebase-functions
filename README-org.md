# my-3rd-firebase-functions


## 参考

- https://qiita.com/tdkn/items/2ed2b01f2656fc50da8c

## create project

```bash
firebase init
```

functions/index.js

```JavaScript
const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});
```

```bash
firebase deploy
```

firebaseの従量課金プランに入る必要あり


以下にブラウザからアクセス

- https://us-central1-my-3rd-firebase-functions.cloudfunctions.net/helloWorld

## Testing

- https://firebase.google.com/docs/functions/unit-testing?hl=ja
