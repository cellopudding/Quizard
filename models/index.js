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
//TODO: make score pivot table i.e. challenge 13 homework (product tag)
module.exports = { User, Quiz };
