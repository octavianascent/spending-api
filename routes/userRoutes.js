const express = require("express");
const router = express.Router();

const userController = require('../controllers/user');

router.get('/', userController.index);

router.post('/login', userController.login);
router.post('/register', userController.registerUser);
router.post('/logout', userController.logoutUser);

module.exports = router;