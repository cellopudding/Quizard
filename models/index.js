const User = require('./User');
const Quiz = require('./Quiz');
const Score = require('./Score');

User.hasMany(Score, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Score.belongsTo(User, {
  foreignKey: 'user_id',
});

Quiz.hasMany(Score, {
  foreignKey: 'quiz_id',
  onDelete: 'CASCADE',
});

Score.belongsTo(Quiz, {
  foreignKey: 'quiz_id',
});

module.exports = { User, Quiz, Score };