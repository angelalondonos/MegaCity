var express = require('express');
var router = express.Router();
var httpstatus=require("http-status-codes");

var mongoose = require('mongoose');
var Almacen = mongoose.model('almacen');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Almacen.find(function(err, item){
  	if(err){return next(err)}

  	res.status(200).send(item);
  })
})


/*post*/
 router.post('/', function(req, res, next) {
    var almacen= new Almacen(req.body);
   almacen.save(function(err,item){

 	if (err) {return next(err)}  
	
 	res.status(201).send({code:1,mensaje:"almacen creado correctamente"}) ;
   })

 })


/*put - update*/
router.put('/:id',function(req,res,next){
Almacen.findById(req.params.id,function(err,item){

	item.nombre=req.body.nombre,
 	item.descripcion=req.body.descripcion,
 	item.telefono=req.body.telefono,
 	item.foto=req.body.foto,
  item.numero_local=req.body.numero_local,

 	item.save(function(err,item){

	if (err) {return next(err)}
	res.status(200).send({code:1,mensaje:"almacen editado"}) ;
  })

})

})


/*delete*/
router.delete('/:id',function(req,res){
Almacen.findByIdAndRemove(req.params.id,function(err){
if (err) {res.send(err)}
	res.status(200).send({code:2,mensaje:"almacen eliminado"}) ;
})
})



module.exports = router;
