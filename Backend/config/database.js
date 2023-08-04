const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('expense_table', 'root', 'Tushar@9921', {
  host: 'localhost',
  dialect: 'mysql',
});


module.exports=sequelize;