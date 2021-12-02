var express = require('express');
var router = express.Router();
var Message=require('../models/message');

router.get('/', function(req, res, next) {

  Message.find().sort({date:-1})
  .then((data)=>{
    console.log(data);
    res.render('index', { title: 'Messaging board', messages :data});
  })

  // error handling
  .catch((err)=>{
    
    next();
  })

});

module.exports = router;
