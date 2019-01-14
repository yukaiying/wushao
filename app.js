var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var flash = require('connect-flash');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var signRouter = require('./routes/sign');
var homeRouter = require('./routes/home');
var informationsRouter = require('./routes/informations');
var ticketRouter = require('./routes/ticket');
var aboutRouter = require('./routes/about');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret:"test_tab",
  cookie:{maxAge:6000}
}));
app.use(flash());
app.use(function (req,resp,next) {
  resp.locals.err = req.flash("err");
  resp.locals.error = req.flash("error");
  resp.locals.err1 = req.flash("err1");
  resp.locals.err2 = req.flash("err2");
  resp.locals.err3 = req.flash("err3");
  resp.locals.err4 = req.flash("err4");
  resp.locals.err5 = req.flash("err5");
  next();
});


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login',loginRouter);
app.use('/sign',signRouter);
app.use('/home',homeRouter);
app.use('/informations',informationsRouter);
app.use('/ticket',ticketRouter);
app.use('/about',aboutRouter);



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
