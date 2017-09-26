var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventoSchema= new mongoose.Schema({

_id:String,
titulo: String,
descripcion: String,
Fecha: { type: Schema.ObjectId, ref: 'Fecha'},


});

mongoose.model('evento', eventoSchema);