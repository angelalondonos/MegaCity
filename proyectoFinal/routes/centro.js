var express = require('express');
var router = express.Router();
var httpstatus=require("http-status-codes");

var mongoose = require('mongoose');
var CentroComercial = mongoose.model('centro_comercial');

/* GET users listing. */
router.get('/', function(req, res, next) {
  CentroComercial.find(function(err, item){
  	if(err){return next(err)}

  	res.status(200).send(item);
  })
})


/*post*/
 router.post('/', function(req, res, next) {
    var centro_comercial= new CentroComercial(req.body);
   centro_comercial.save(function(err,item){

 	if (err) {return next(err)}  
	
 	res.status(201).send({code:1,mensaje:"centro comercial creado correctamente"}) ;
   })

 })


/*put - update*/
router.put('/:id',function(req,res,next){
CentroComercial.findById(req.params.id,function(err,item){

	item.nombre=req.body.nombre,
  item.descripcion=req.body.descripcion,
  item.categoria=req.body.categoria,
  item.telefono=req.body.telefono,
  item.foto=req.body.foto,





 	item.save(function(err,item){

	if (err) {return next(err)}
	res.status(200).send({code:1,mensaje:"centro comercial editado"}) ;
  })

})

})


/*delete*/
router.delete('/:id',function(req,res){
CentroComercial.findByIdAndRemove(req.params.id,function(err){
if (err) {res.send(err)}
	res.status(200).send({code:2,mensaje:"centro comercial eliminado"}) ;
})
})



module.exports = router;
