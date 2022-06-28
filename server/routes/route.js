const express = require('express');
const addUser = require('../controler/userControler.js')

const router = express.Router();

 router.post('/add', addUser)
// // router.post('/add', (req, res) => {
// //     console.log("The request is coming from the frontend");
// // })

module.exports = router;
