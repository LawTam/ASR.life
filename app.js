var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('views', path.join(__dirname, 'views/Homepage.extensions'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Serve static content (images, videos, scripts) from the 'public' directory
app.use(express.static('public'));

// Declare webpage routers here
// <ADD HERE FOR A NEW WEBPAGE>
var Homepage_Router = require('./routes/Homepage');
var About_Us_Router = require('./routes/About_Us');

// Hook up routers to the express app
// <ADD HERE FOR A NEW WEBPAGE>
app.use('/', Homepage_Router);
app.use('/About_Us', About_Us_Router);


// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
//   res.status(404).send("Sorry can't find that!")
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
