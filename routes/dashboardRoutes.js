const express = require('express');
const router = express.Router();
const { body } = require('express-validator/check');
const isAuth = require('../middleware/isAuth');

const spendingController = require('../controllers/spending');
const spendingTypeController = require('../controllers/spendingType');

router.get('/spending', isAuth, spendingController.index);
router.post('/create-spending', spendingController.createSpending);

router.get('/create-spending-type', isAuth, spendingTypeController.getSpendingTypes);
router.post('/create-spending-type', isAuth, spendingTypeController.createSpendingType);

module.exports = router;