const express = require('express');
// --------for add users ---------
const addUser = require('../controler/userControler.js')

// --------dfor get users ---------
const getUsers = require('../controler/userControler.js')

const router = express.Router();

 router.post('/add', addUser.addUser);
 router.get('/all', getUsers.getUsers);
// // router.post('/add', (req, res) => {
// //     console.log("The request is coming from the frontend");
// // })

module.exports = router;
