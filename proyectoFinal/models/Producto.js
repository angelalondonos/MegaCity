var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productoSchema= new mongoose.Schema({

_id:String,
nombre: String,
cantidad: Number,

});

mongoose.model('producto', productoSchema);