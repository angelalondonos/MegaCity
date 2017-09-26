var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var almacenSchema= new mongoose.Schema({

_id:String,
nombre: String,
descripcion: String,
telefono: String,
foto: String,
numero_local: String,//buscar por eso
Producto: { type: Schema.ObjectId, ref: 'Producto'},
Fecha: { type: Schema.ObjectId, ref: 'Fecha'},

});

mongoose.model('almacen', almacenSchema);