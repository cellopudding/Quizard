//this will need fixing....

const { Model, DataTypes} = require ("sequelize")

const sequelize = require("../config/connection")

class Quiz extends Model {}

Quiz.init(
    {
        title: DataTypes.STRING,
        body: DataTypes.STRING
    },
    {
        sequelize
    }
);

module.exports = Quiz