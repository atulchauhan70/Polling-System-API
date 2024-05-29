require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const db = require('./config/mongoose');

// Routes
app.use('/', require('./routes/index'));

const port = process.env.PORT || 8000; // Use the value from environment variable or default to 8000

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    }
    console.log("Server is running on port:", port);
});
