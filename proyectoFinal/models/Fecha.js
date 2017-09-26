var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var fechaSchema= new mongoose.Schema({

_id:String,
descripcion: String,
fecha_inicio: Date,
fecha_fin:Date,
 
});

mongoose.model('fecha', fechaSchema);