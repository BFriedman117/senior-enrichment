const db = require('../index');
const Sequelize = require('sequelize');

const Student = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  gpa: {
    type: Sequelize.DECIMAL,
    validate: {
      min: 0,
      max: 4
    }
  },
  name: {
    type: Sequelize.VIRTUAL,
    get(){
      let first = this.getDataValue('firstName');
      let last = this.getDataValue('lastName');
      return first + ' ' + last;
    }
  }
})

module.exports = Student
