const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const articlesRoute = require('./api/routes/articles');
//const commentsRoute = require('./api/routes/comments');
const baseUrl = '/api/v1';

//Conexión a la base de datos
const mongodbUrl = `mongodb+srv://theVeloper:${process.env.MONGO_PASSWORD}@cluster0-2ydnk.mongodb.net/test?retryWrites=true&w=majority`
mongoose.connect(mongodbUrl, {useNewUrlParser: true})


//Middlewares
app.use(bodyParser.json());
app.use(baseUrl + '/articles', articlesRoute);



app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});
module.exports = app;