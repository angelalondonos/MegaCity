var express = require('express');
var router = express.Router();
var httpstatus=require("http-status-codes");

var mongoose = require('mongoose');
var Factura = mongoose.model('factura');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Factura.find(function(err, item){
  	if(err){return next(err)}

  	res.status(200).send(item);
  })
})


/*post*/
 router.post('/', function(req, res, next) {
    var factura= new Factura(req.body);
   factura.save(function(err,item){

 	if (err) {return next(err)}  
	
 	res.status(201).send({code:1,mensaje:"factura creada correctamente"}) ;
   })

 })


/*put - update*/
router.put('/:id',function(req,res,next){
Factura.findById(req.params.id,function(err,item){

	item.id=req.body.id,
  item.valor=req.body.valor,
  



 	item.save(function(err,item){

	if (err) {return next(err)}
	res.status(200).send({code:1,mensaje:"factura editada"}) ;
  })

})

})


/*delete*/
router.delete('/:id',function(req,res){
Factura.findByIdAndRemove(req.params.id,function(err){
if (err) {res.send(err)}
	res.status(200).send({code:2,mensaje:"factura eliminada"}) ;
})
})



module.exports = router;
