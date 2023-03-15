const User = require('./User');
const Quiz = require('./Quiz');

// User.hasMany(Quiz, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

// Quiz.belongsTo(User, {
//   foreignKey: 'user_id'
// });

//TODO: make score table and establish relationship between User and Score
module.exports = { User, Quiz };
