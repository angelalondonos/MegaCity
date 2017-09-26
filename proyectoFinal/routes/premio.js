var express = require('express');
var router = express.Router();
var httpstatus=require("http-status-codes");

var mongoose = require('mongoose');
var Premio = mongoose.model('premio');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Premio.find(function(err, item){
  	if(err){return next(err)}

  	res.status(200).send(item);
  })
})


/*post*/
 router.post('/', function(req, res, next) {
    var premio= new Premio(req.body);
   premio.save(function(err,item){

 	if (err) {return next(err)}  
	
 	res.status(201).send({code:1,mensaje:"premio creado correctamente"}) ;
   })

 })


/*put - update*/
router.put('/:id',function(req,res,next){
Premio.findById(req.params.id,function(err,item){

	item.nombre=req.body.nombre,
  item.descripcion=req.body.descripcion,
  item.cantidad_puntos=req.cantidad_puntos,
  item.cantidad_stock=req.cantidad_stock,
  item.foto=req.foto,
 

 	item.save(function(err,item){

	if (err) {return next(err)}
	res.status(200).send({code:1,mensaje:"premio editado"}) ;
  })

})

})


/*delete*/
router.delete('/:id',function(req,res){
Premio.findByIdAndRemove(req.params.id,function(err){
if (err) {res.send(err)}
	res.status(200).send({code:2,mensaje:"premio eliminado"}) ;
})
})



module.exports = router;
