const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const axios = require('axios');

// npm install dotenv
// Activates dotenv to look at .env file:
require("dotenv").config();

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/

// Would usually be in a router:
// Known as a proxy API, job is to hide the key:
// CANNOT COMMIT WITH A KEY IN YOUR FILE.
app.get('/trending', (req, res) => {
  axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=${process.env.GIPHY_API_KEY}`)
    .then(response => {
      console.log('Response.data is:', response.data);
      res.send(response.data);
    }) // End .then
    .catch(error => {
      console.log('Axios Giphy Error:', error);
      res.sendStatus(500);
    }); // End .catch
});


/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
  console.log('Listening on port: ', PORT);
});