module.exports = (sequelize, Sequelize) => {
    const SpendingType = sequelize.define('spendingType', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    });

    SpendingType.associate = (models) => {
        SpendingType.belongsTo(models['user'], {
            foreignKey: 'userId',
            onDelete: 'CASCADE'
        });
    };

    return SpendingType;
};