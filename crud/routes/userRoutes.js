const express = require('express');

const {home, createUser} = require('../controllers/userControllers.js');


const router = express.Router();

router.get("/", home)
router.post('/createuser', createUser)

module.exports = router

