var express = require('express');
var router = express.Router();
var Message =  require('../models/message');

// get requesting for form 
router.get('/new', function(req, res, next) {
  res.render('form');
});

// post request for submitting data to database
router.post('/new', function(req, res, next) {

  //inserting document in a database
  const {username, message}=req.body;
  
  //writing data to database
  Message.create({user:username,message:message,date:Date.now()})
  .then((response)=>{
    res.status(200);
    res.redirect('/');
  })

  // error handling 
  .catch((err)=>{
    next();
  })
});

module.exports = router;
