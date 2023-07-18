const express = require('express');
require('dotenv').config();

const app = express();

const { PORT } = process.env;

const routes = require('./routes');

app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  console.log(`Running in PORT: ${PORT}`);
});

module.exports = app;
