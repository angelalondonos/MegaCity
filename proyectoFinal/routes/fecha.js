var express = require('express');
var router = express.Router();
var httpstatus=require("http-status-codes");

var mongoose = require('mongoose');
var Fecha = mongoose.model('fecha');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Fecha.find(function(err, item){
  	if(err){return next(err)}

  	res.status(200).send(item);
  })
})


/*post*/
 router.post('/', function(req, res, next) {
    var fecha= new Fecha(req.body);
   fecha.save(function(err,item){

 	if (err) {return next(err)}  
	
 	res.status(201).send({code:1,mensaje:"fecha creada correctamente"}) ;
   })

 })


/*put - update*/
router.put('/:id',function(req,res,next){
Fecha.findById(req.params.id,function(err,item){

	item.descripcion=req.body.descripcion,
  item.fecha_inicio=req.body.fecha_inicio,
  item.fecha_fin=req.body.fecha_fin,

 	item.save(function(err,item){

	if (err) {return next(err)}
	res.status(200).send({code:1,mensaje:"fecha editada"}) ;
  })

})

})


/*delete*/
router.delete('/:id',function(req,res){
Fecha.findByIdAndRemove(req.params.id,function(err){
if (err) {res.send(err)}
	res.status(200).send({code:2,mensaje:"fecha eliminada"}) ;
})
})



module.exports = router;
