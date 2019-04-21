const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/db.config.js');
const mongoose = require('mongoose');

/** Define Express */
const app = express();

/** Parse application json */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/** Connecting to the database */
mongoose.connect(dbConfig.url);
mongoose.connection.on('connected', (client) => {
    console.log('Connected to database');
});
mongoose.connection.on('error', () => {
    throw new Error('Unable to connect to database. Please contact to System Administrator');
});

/** /api path handles all routes */
const recordRoute = require('./server/routes/records');
app.use(recordRoute);

/** listen for requests */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});