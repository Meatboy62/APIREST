var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Esta es la raiz de la ruta /ico');
});

router.get('/ingsoft', function(req, res, next) {
  //res.send('Esta es la raiz de la materia de ingenieria en software');
  res.render('is', {profe:"JHC"});
});

router.get('/poo', function(req, res, next) {
  var datos= {
                nombre: "Programacion Orientada a Objetos",
                clave: "2298"
              };
  res.render('poo',datos);
});

router.get('/cyp', function(req, res, next) {
  var datos= {
                nombre: "Computadoras y Programacion",
                clave: "1101"
              };
  res.render('Semestre1/cyp',datos);
});



module.exports = router;
