const sequelize = require('../config/connection');
const seedQuiz = require('./seedData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedQuiz();

  process.exit(0);
};

seedAll();
