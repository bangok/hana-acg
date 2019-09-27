var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//路由
var indexRouter = require('./routes/index');
var pageRouter = require('./routes/pageRouter');


var app = express();  //生成一个app实例

// view engine setup
app.set('views', path.join(__dirname, 'views'));  //设置视图文件的目录
app.set('view engine', 'ejs');  //设置模板引擎

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); //设置静态文件目录

app.use('/', indexRouter);
app.use('/page', pageRouter);

//处理404错误，放在所有路由后面
app.get('*', function (req, res){
    res.render('error', {});
});

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
