var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
    var ran=Math.random();
   // var ran=search_params.get("ran")
   if(req.query.ran!=undefined){
    ran=req.query.ran;
   }
  // let num=Math.atan2(ran,ran)
  res.render('computation', { title: 'computation', 
 key1: `${ran} is ${Math.atan2(ran,ran)}`,
   val2: `${ran} is ${Math.atanh(ran)}`,
   sol3: `${ran} is ${Math.cbrt(ran)}`
}
  );
 

});

module.exports = router;
