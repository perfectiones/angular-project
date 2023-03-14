const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
const config = require('./config/db');
const account = require('./routes/account');

const app = express();

const port = 3000;

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use(cors());

app.use(bodyParser.json());

mongoose.connect(config.db, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
    console.log("Successful connection to the database")
});

mongoose.connection.on('error', (err) => {
    console.log("Not successful connection to the database" + err)
});

app.listen(port, () => {
    console.log("The server was running on the port:" + port)
});

app.get('/', (req, res) => {
    res.send("Home page")
});

app.use('/account', account);