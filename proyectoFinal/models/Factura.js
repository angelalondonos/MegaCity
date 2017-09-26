var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var facturaSchema= new mongoose.Schema({

_id:String,
Almacen: { type: Schema.ObjectId, ref: 'Almacen'},
Cliente: { type: Schema.ObjectId, ref: 'Cliente'},
valor: Number,
});

mongoose.model('factura', facturaSchema);