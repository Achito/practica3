var express = require('express');
var router = express.Router();

// Diccionario de prueba, valdría con una bbdd también

let dic = new Map();

dic.set('oW5AK5BW43HzbTSKpiu3SQ', 'hyN9IKGfWKdAwFaE5pm0qg');

router.get('/get_key', function(req, res, next) {

  let data = req.query;
  //console.log(Object.keys(data)[0]);
  keyId = Object.keys(data)[0];
  key = dic.get(keyId);
  //console.log(key);

  let response = {'keys': []};
        response['keys'].push({
            'kid': keyId,
            'k':  key,
            'kty': 'oct'
        });
    console.log(response);
    
    return res.json(response);
});



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
