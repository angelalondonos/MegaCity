var express = require('express');
var router = express.Router();
var httpstatus=require("http-status-codes");

var mongoose = require('mongoose');
var Administrador = mongoose.model('administrador');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Administrador.find(function(err, item){
  	if(err){return next(err)}

  	res.status(200).send(item);
  })
})


/*post*/
 router.post('/', function(req, res, next) {
    var administrador= new Administrador(req.body);
   administrador.save(function(err,item){

 	if (err) {return next(err)}  
	
 	res.status(201).send({code:1,mensaje:"administrador creado correctamente"}) ;
   })

 })


/*put - update*/
router.put('/:id',function(req,res,next){
Administrador.findById(req.params.id,function(err,item){

	item.usuario=req.body.usuario,
  item.pw=req.body.pw,
  item.correo=req.body.correo,


 	item.save(function(err,item){

	if (err) {return next(err)}
	res.status(200).send({code:1,mensaje:"administrador editado"}) ;
  })

})

})


/*delete*/
router.delete('/:id',function(req,res){
Administrador.findByIdAndRemove(req.params.id,function(err){
if (err) {res.send(err)}
	res.status(200).send({code:2,mensaje:"administrador eliminado"}) ;
})
})



module.exports = router;
