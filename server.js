const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const multer = require('multer');

const router = express.Router();
const path = require('path');
const PORT = 8800;

dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  (err) => {
    if (err) console.log('error: ', err);
    else console.log('mongdb is connected');
  }
);

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use('/api/auth', require('./routes/auth'));

app.listen(PORT, () => {
  console.log('Backend server is running!');
});
