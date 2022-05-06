var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Esta es la raiz de Pokeapi');
});

router.get('/pikachu', function(req, res, next) {
  res.json('Esta es la raiz de Pokeapi');
});

module.exports = router;
