const express = require('express');
require('dotenv').config({ path: `${__dirname}/.env` });
const mongoose = require('mongoose');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const routes = require('./src/router');

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });

const PORT = process.env.PORT || 3000;
class App {
  constructor() {
    this.express = express();
    mongoose.connect('mongodb://mongodb:27017/blog', { useNewUrlParser: true, useUnifiedTopology: true });
    this.middlewares();
    this.routes();
    this.express.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  }

  middlewares() {
    this.express.use(cors());
    this.express.use(express.json());
  }

  routes() {
    this.express.use(limiter);
    this.express.use(routes);
  }
}

module.exports = new App().express;
