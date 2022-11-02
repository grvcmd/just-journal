const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config();
const axios = require('axios');
app.use(express.json()); // Allows us to access req body as req.body

// Connect to MongoDB
mongoose
    .connect(process.env.MONGODB_CONNECTION_URL)
    .then(() => {
        console.log('Database connection success!')
    })
    .catch((err) => {
        console.error("MongoDB connection error", err)
    });
const port = process.env.PORT
app.use(cors());

// Routes for each model
const topicRouter = require('./routes/topics')
const entryRouter = require('./routes/entries')

// Every router created with topicRouter will
// be added to the end of '/topics'
app.use('/topics', topicRouter);
// Every router created with entryRouter will
// be added to the end of '/entries'
app.use('/entries', entryRouter);

// Endpoint for the homepage
app.get('/', (req, res) => {
    res.send('Hello, This is the homepage')
});


// Server will start listening and log a message if OK
app.listen(port, () => {
    console.log("Server started listening on port " + port + ".");
  });

// Error handler
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) 
        err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});