const express = require('express');
const router = express.Router();
const { getUsers ,createUser, claimPoints } = require('../controller/userController');
const { pointHistory } = require('../controller/historyController');

router.get('/users',getUsers);
router.post('/create',createUser);
router.patch('/user/:id',claimPoints);
router.get('/user/history/:id',pointHistory);

module.exports = router;