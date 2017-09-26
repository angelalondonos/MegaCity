var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var centro_comercialSchema= new mongoose.Schema({

_id:String,
nombre: String,
descripcion: String,
categoria:String,
telefono: String,
foto: String,
Administrador: { type: Schema.ObjectId, ref: 'Administrador'},
Ubicacion: { type: Schema.ObjectId, ref: 'Ubicacion'},
Evento: { type: Schema.ObjectId, ref: 'Evento'},
Almacen: { type: Schema.ObjectId, ref: 'Almacen'},
Fecha: { type: Schema.ObjectId, ref: 'Fecha'},
Cliente: { type: Schema.ObjectId, ref: 'Cliente'},
Premio: { type: Schema.ObjectId, ref: 'Premio'},



});

mongoose.model('centro_comercial', centro_comercialSchema);