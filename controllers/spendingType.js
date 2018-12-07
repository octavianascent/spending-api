const SpendingType = require('../models').spendingType;
const { validationResult } = require('express-validator/check');

exports.getSpendingTypes = async (req, res, next) => {
  const spendingTypes =  await SpendingType.findAll({
    where: {userId: req.userId}
  });

  res.json({ spendingTypes: spendingTypes })
};

exports.createSpendingType = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: 'Validation failed, data is incorrect',
      errors: errors.array()
    })
  }

  const spendingTypeName = req.body.spendingType;
  const userId = req.userId || '';

  await SpendingType.create({
    name: spendingTypeName,
    userId: userId
  });

  res.status(201).json({message: 'Resource created'});
};