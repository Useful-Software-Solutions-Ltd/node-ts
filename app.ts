import express = require('express');
import { Test } from './test';

// Create a new express application instance
const app: express.Application = express();

const test = new Test();

test.test();

app.listen(3000, () => {
  console.log('Example app listening on port 3000!!');
});
