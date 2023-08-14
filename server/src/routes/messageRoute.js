const router = require('express').Router();
const { getMessages, sendMessage } = require('../controller/messageController');

router.get('/', getMessages);
router.post('/', sendMessage);

module.exports = router;
