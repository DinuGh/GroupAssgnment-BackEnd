/**
 * Module dependencies.
 */
const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const passport = require('passport');
const cors = require('cors');
// const path = require('path');
// const cookieParser = require('cookie-parser');
// const session = require('express-session');
// const flash = require('connect-flash');

const indexRouter = require('../routes/index');
const usersRouter = require('../routes/users'); // Defining routes for users login
const advertisementRouter = require('../routes/advertisement'); // Defining routers for advertisement list
const errorHandler = require('./error-handler');

const app = express();

app.use(cors());
app.options('*', cors());

// Setup session
// app.use(session({
//   saveUninitialized: true,
//   resave: true,
//   secret: 'sessionSecret'
// }));

// view engine setup
// app.set('../views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, '../node_modules')));
// Path for bootstrap module for CSS
// app.use('/css',express.static(path.join(__dirname, '../../public/css')));
// app.use('/img',express.static(path.join(__dirname, '../../public/img')));
// app.use(express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));

// Passport setup
// app.use(flash());
app.use(passport.initialize());
// app.use(passport.session());

// Add headers before the routes are defined
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/advertisement', advertisementRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(errorHandler.errorHandlerMiddleware)
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
