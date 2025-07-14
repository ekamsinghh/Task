const express = require('express');
const router = express.Router();
const { getUsers ,createUser, claimPoints } = require('../controller/userController');

router.get('/users',getUsers);
router.post('/create',createUser);
router.patch('/user/:id',claimPoints);

module.exports = router;