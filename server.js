'use strict';

// This brings in our express library - which is our server
const express = require('express');

// Initializes our express library into the variable (constant) app
const app = express();

// This library goes into our .env file, and gets our variables so we can use them
require('dotenv').config();

// Like saying: "Hey express, find the public folder, and serve files from there"
app.use(express.static('./public'));

const PORT = process.env.PORT;

// Turning on the server and console-logging the port
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
})

