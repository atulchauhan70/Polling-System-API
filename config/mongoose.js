const mongoose = require('mongoose');
require('dotenv').config();

// Use environment variable for MongoDB URI
const mongoURI = process.env.MONGODB_URI;

// Code for using the cloud MongoDB Atlas 
const connectParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(mongoURI, connectParams);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error connecting to database'));

db.once('open', () => {
    console.log("successfully connected to database : mongoDB");
});

module.exports = mongoose;
