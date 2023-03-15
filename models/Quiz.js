
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
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answerA: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answerB: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answerC: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answerD: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correctAnswer: {
      type: DataTypes.STRING,
      allowNull: false,
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

