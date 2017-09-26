var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ubicacionSchema= new mongoose.Schema({

_id:String,
ciudad: String,
barrio: String,
carrera: String,
calle: String,
numero: String,

});

mongoose.model('ubicacion', ubicacionSchema);