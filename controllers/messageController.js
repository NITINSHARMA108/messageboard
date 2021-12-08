const Message = require('../models/message');

// redirecting to home page
exports.redirect_message = function(req, res, next) {
  res.redirect('messages');
}

// get messages
exports.get_messages = function(req, res, next) {
	Message.find().sort({date:-1})
	.then((data)=>{
		res.render('index', {title: 'Messaging board', messages: data});
	})
	.catch((err)=>{
		next(err);
	})
}

// requesting for create message form
exports.get_message_form = function(req, res, next) {
  res.render('form');
}

// posting data to database
exports.post_message = function(req, res, next) {
  const { username, message }=req.body;
  Message.create({user:username,message:message,date: new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })})
  .then((response)=>{
    res.status(200);
    res.redirect('/messages');
  })
  .catch((err)=>{
    next(err);
  })
}