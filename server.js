var createError = require('http-errors');
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
var passport = require('passport');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(passport.initialize());
app.use(passport.session());
var User = require('./models/User');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/journalentrylist", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}
);

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
