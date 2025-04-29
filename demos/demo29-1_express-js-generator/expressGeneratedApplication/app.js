var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminRouter = require('./routes/admin');

var app = express();

// 🛠️ Configuración de las vistas
app.set('views', path.join(__dirname, 'views')); // decirle dónde están tus archivos .pug
app.set('view engine', 'pug'); // decirle que vas a usar pug

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter)

module.exports = app;
