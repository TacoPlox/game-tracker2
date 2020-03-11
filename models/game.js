const {Sequelize, DataTypes} = require('sequelize');
const Model = Sequelize.Model;

const {sequelize} = require('./../config/db');

class Game extends Model {}

Game.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize,
    modelName: 'game',

    freezeTableName: true,
    tableName: 'games'
});

// Game.sync({force: true})


module.exports = {Game};