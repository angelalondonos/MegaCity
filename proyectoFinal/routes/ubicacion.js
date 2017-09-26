var express = require('express');
var router = express.Router();
var httpstatus=require("http-status-codes");

var mongoose = require('mongoose');
var Ubicacion = mongoose.model('ubicacion');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Ubicacion.find(function(err, item){
  	if(err){return next(err)}

  	res.status(200).send(item);
  })
})


/*post*/
 router.post('/', function(req, res, next) {
    var ubicacion= new Ubicacion(req.body);
   ubicacion.save(function(err,item){

 	if (err) {return next(err)}  
	
 	res.status(201).send({code:1,mensaje:"ubicacion creada correctamente"}) ;
   })

 })


/*put - update*/
router.put('/:id',function(req,res,next){
Ubicacion.findById(req.params.id,function(err,item){

	item.id=req.body.id,
  item.ciudad=req.body.ciudad,
  item.barrio=req.body.barrio,
  item.carrera=req.body.carrera,
  item.calle=req.body.calle,
  item.numero=req.body.numero,



 	item.save(function(err,item){

	if (err) {return next(err)}
	res.status(200).send({code:1,mensaje:"ubicacion editada"}) ;
  })

})

})


/*delete*/
router.delete('/:id',function(req,res){
Ubicacion.findByIdAndRemove(req.params.id,function(err){
if (err) {res.send(err)}
	res.status(200).send({code:2,mensaje:"ubicacion eliminada"}) ;
})
})



module.exports = router;
