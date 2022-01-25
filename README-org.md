# my-3rd-firebase-functions


## 参考

- https://qiita.com/tdkn/items/2ed2b01f2656fc50da8c

## create project

```bash
npm install -g firebase-tools
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

```bash
cd functions
npm install --save-dev firebase-functions-test
npm install --save-dev mocha
npm install --save-dev chai
```


```bash
mkdir test
touch test/index.test.js
```

functions/package.json

```json
"scripts": {
  "test": "mocha --reporter spec"
}
```

index.test.js
```js
```


```bash
npm test
```


## Run Local

```bash
firebase emulators:start
```

http://localhost:5001/my-3rd-firebase-functions/us-central1/helloWorld
