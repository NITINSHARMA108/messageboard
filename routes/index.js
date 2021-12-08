var express = require('express');
var router = express.Router();
const messageController = require('../controllers/messageController');

// redirect to /messages
router.get('/', messageController.redirect_message);

// displaying messages
router.get('/messages', messageController.get_messages);

// requesting for message create form
router.get('/create_message', messageController.get_message_form);

// posting data to database
router.post('/messages', messageController.post_message);

module.exports = router;
