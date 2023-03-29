var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
    var ran=Math.random();
   
  res.render('computation', { title: 'computation', key1: `${ran,ran} is ${Math.atan2(ran,ran)}`,
   val2: `${ran,ran} is ${Math.atanh(ran)}`,
   sol3: `${ran,ran} is ${Math.cbrt(ran)}`});
 

});

module.exports = router;
