const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

//db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Database Connected...'));

app.use('/api', require('./routes/user'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>
  console.log(`Server is listening on http://localhost:${PORT}`)
);
