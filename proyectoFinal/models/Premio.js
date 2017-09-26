var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var premioSchema= new mongoose.Schema({

_id:String,
nombre: String,
descripcion: String,
cantidad_puntos: Number,
cantidad_stock: Number,
foto: String,

});

mongoose.model('premio', premioSchema);