var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose'); //LIBRERIA REQUERIDA (1)


// aquí se referencian todos nuestros modelos (models)
require('./models/Cliente'); 
require('./models/Almacen');
require('./models/Evento');
require('./models/Administrador');
require('./models/Producto');
require('./models/Premio');
require('./models/CentroComercial');
require('./models/Fecha');
require('./models/Ubicacion');
require('./models/Factura');






mongoose.connect('mongodb://localhost/proyecto');//CONEXION A LA BASE DE DATOS (1)


// aquí se referencian las rutas de nuestra lógica (routes)
var index = require('./routes/index');
var usuarios = require('./routes/cliente'); 
var almacenes = require('./routes/almacen');
var eventos = require('./routes/evento');
var administradores = require('./routes/administrador');
var productos = require('./routes/producto');
var premios = require('./routes/premio');
var centro = require('./routes/centro');
var fechas = require('./routes/fecha');
var ubicaciones = require('./routes/ubicacion');
var facturas = require('./routes/factura');
 





var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



//aquí se establece cuál será la ruta de acceso
app.use('/', index);
app.use('/usuarios', usuarios);
app.use('/almacenes', almacenes);
app.use('/eventos', eventos);
app.use('/administradores', administradores);
app.use('/productos', productos);
app.use('/premios', premios);
app.use('/centro', centro);
app.use('/fechas', fechas);
app.use('/ubicaciones', ubicaciones);
app.use('/facturas', facturas);
 





 
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
