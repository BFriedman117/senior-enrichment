const db = require('../index');
const Sequelize = require('sequelize');

const Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT('long')
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: null
  }
})


//get back to: imageUrl/default value?

module.exports = Campus
