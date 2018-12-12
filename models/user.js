const bcrypt = require('bcryptjs');

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('user', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  User.associate = (models) => {
    User.hasMany(models['spendingType'], {
      foreignKey: 'userId',
      as: 'spendingTypes'
    });

    User.hasMany(models['spending'], {
      foreignKey: 'userId',
      as: 'spendingItems'
    });
  };

  User.addHook('beforeCreate', (user) => {
    user.password = bcrypt.hashSync(user.password, 12);
  });

  return User;
};