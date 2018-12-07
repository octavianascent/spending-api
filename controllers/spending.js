const Spending = require('../models').spending;

exports.index = async (req, res, next) => {
  const spendingItems = await Spending.findAll({ where: {userId: req.userId} });
  res.status(200).json({spendingItems: spendingItems});
};

exports.createSpending = async (req, res, next) => {
  const {type, amount, date} = req.body;
  const userId = req.userId;

  await Spending.create({
    type: type,
    amount: amount,
    date: new Date(date),
    userId: userId
  });

  res.status(200).json({error: false, message: 'Spending created'});
};
