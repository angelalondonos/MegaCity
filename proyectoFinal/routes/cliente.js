var express = require('express');
var router = express.Router();
var httpstatus=require("http-status-codes");

var mongoose = require('mongoose');
var Cliente = mongoose.model('cliente');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Cliente.find(function(err, item){
  	if(err){return next(err)}

  	res.status(200).send(item);
  })
})



router.get('/:id', function(req, res, next) {
  Cliente.findById(req.params.id,function(err, item){
  	if(err){return next(err)}

  	res.status(200).send(item);
  })
})



//get para login
router.get('/login/:us/:pw', function(req, res, next) {
  Cliente.findOne({'usuario':req.params.us},function(err, item){
  	if(err){return next(err)}

  	if (!item) {
		res.status(400).send({code:1,mensaje:"el cliente no está registrado"});
	}else{
		if(item.pw != req.params.pw){
			res.status(400).send({code:1,mensaje:"la contraseña no es correcta"});
		}else{
			res.status(200).send({code:1,mensaje:"cliente correcto"});
		}
	}

  })
})

/*post*/
router.post('/', function(req, res, next) {
   var cliente= new Cliente(req.body);
  cliente.save(function(err,item){

	if (err) {return next(err)}  
	
	res.status(201).send({code:1,mensaje:"cliente creado correctamente"}) ;
  })

})


/*put - update*/
router.put('/:id',function(req,res,next){
Cliente.findById(req.params.id,function(err,item){

	item.cedula=req.body.cedula;
 	item.nombre= req.body.nombre,
	item.usuario= req.body.usuario,
	item.pw=req.body.pw,
	item.foto= req.body.foto,
	item.telefono= req.body.telefono,
	item.fechaNacimiento= req.body.fechaNacimiento,
	item.direccion= req.body.direccion,
	item.correo= req.body.correo,
	item.cantidad_puntos= req.body.cantidad_puntos,

 	item.save(function(err,item){

	if (err) {return next(err)}
	res.status(200).send({code:1,mensaje:"cliente editado"}) ;
  })

})

})


/*delete*/
router.delete('/:id',function(req,res){
Cliente.findByIdAndRemove(req.params.id,function(err){
if (err) {res.send(err)}
	res.status(200).send({code:2,mensaje:"cliente eliminado"}) ;
})
})



module.exports = router;
