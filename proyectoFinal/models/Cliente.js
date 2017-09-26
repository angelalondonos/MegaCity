var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClienteSchema = new  mongoose.Schema({
	
	// _id:String,
	cedula:String,
	nombre: String,
	usuario: String,
	pw:String,
	foto: String,
	telefono: String,
	fechaNacimiento: Date,
	direccion: String,
	correo: String,
	cantidad_puntos: Number,
	Factura: { type: Schema.ObjectId, ref: 'Factura'},

});

mongoose.model('cliente', ClienteSchema);