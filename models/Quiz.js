const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Quiz extends Model {}

Quiz.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Quiz",
  }
);

module.exports = Quiz;
