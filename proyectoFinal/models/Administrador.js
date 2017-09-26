var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var administradorSchema= new mongoose.Schema({

_id:String,
usuario: String,
pw: String,
correo:String

});

mongoose.model('administrador', administradorSchema);