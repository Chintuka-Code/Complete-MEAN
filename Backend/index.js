require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

const PORT = process.env.PORT || 4000;
const DB_URL = process.env.DB_URL;

// Database Connection
mongoose
  .connect(DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log('DataBase Connect'))
  .catch((error) => {
    console.log(error);
  });

// required Route
const User = require('./Routes/user');

// Using middle ware
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use('/user', User);

app.listen(PORT, () => console.log(`App started on http://localhost:${PORT}`));
