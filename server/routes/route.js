const express = require('express');
// --------for add users ---------
const userController = require('../controler/userControler')

const router = express.Router();

 router.post('/add', userController.addUser);
 router.get('/all', userController.getUsers);


module.exports = router;
