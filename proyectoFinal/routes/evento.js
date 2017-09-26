var express = require('express');
var router = express.Router();
var httpstatus=require("http-status-codes");

var mongoose = require('mongoose');
var Evento = mongoose.model('evento');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Evento.find(function(err, item){
  	if(err){return next(err)}

  	res.status(200).send(item);
  })
})


/*post*/
 router.post('/', function(req, res, next) {
    var evento= new Evento(req.body);
   evento.save(function(err,item){

 	if (err) {return next(err)}  
	
 	res.status(201).send({code:1,mensaje:"evento creado correctamente"}) ;
   })

 })


/*put - update*/
router.put('/:id',function(req,res,next){
Evento.findById(req.params.id,function(err,item){

	item.titulo=req.body.titulo,
  item.descripcion=req.body.descripcion,


 	item.save(function(err,item){

	if (err) {return next(err)}
	res.status(200).send({code:1,mensaje:"evento editado"}) ;
  })

})

})


/*delete*/
router.delete('/:id',function(req,res){
Evento.findByIdAndRemove(req.params.id,function(err){
if (err) {res.send(err)}
	res.status(200).send({code:2,mensaje:"evento eliminado"}) ;
})
})



module.exports = router;
