var express = require('express');
var router = express.Router();
var httpstatus=require("http-status-codes");

var mongoose = require('mongoose');
var Producto = mongoose.model('producto');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Producto.find(function(err, item){
  	if(err){return next(err)}

  	res.status(200).send(item);
  })
})


/*post*/
 router.post('/', function(req, res, next) {
    var producto= new Producto(req.body);
   producto.save(function(err,item){

 	if (err) {return next(err)}  
	
 	res.status(201).send({code:1,mensaje:"producto creado correctamente"}) ;
   })

 })


/*put - update*/
router.put('/:id',function(req,res,next){
Producto.findById(req.params.id,function(err,item){

	item.nombre=req.body.nombre,
  item.cantidad=req.body.cantidad,
   


 	item.save(function(err,item){

	if (err) {return next(err)}
	res.status(200).send({code:1,mensaje:"producto editado"}) ;
  })

})

})


/*delete*/
router.delete('/:id',function(req,res){
Producto.findByIdAndRemove(req.params.id,function(err){
if (err) {res.send(err)}
	res.status(200).send({code:2,mensaje:"producto eliminado"}) ;
})
})



module.exports = router;
