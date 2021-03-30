var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

// TODO: Add cors
var mongoose = require('mongoose')
var dotenv = require('dotenv').config()
var cors = require('cors')

mongoose.connect(process.env.MONGOOSEURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const {log} = require('console')

var app = express();

var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
var bcrypt = require('bcryptjs')
var userModel = require('./models/user')

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
  },
  (email, password, done) => {
    userModel.findOne({ email: email }, (err, found) => {
      if (!found) {
        done(null, false)
      } else {
        bcrypt.compare(password, found.password, (err, result) => {
          if (result) {
            return done(null, found)
          } else {
            return done(null, false)
          }
        })
      }
    })
  }
))

passport.serializeUser(function(user, done) {
  done(null, user._id)
})

passport.deserializeUser(function(id, done) {
  userModel.findOne({_id: id}, function(err, user) {
    if (err) console.log(err)
    done(null, user)
  })
})

app.use(passport.initialize())
app.use(passport.session())

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
  exposedHeaders: ["set-cookie"],
}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

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
