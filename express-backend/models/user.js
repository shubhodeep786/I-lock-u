'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    UserID: DataTypes.INTEGER,
    Name: DataTypes.STRING,
    Email: DataTypes.STRING,
    PhoneNumber: DataTypes.STRING,
    LoginPIN: DataTypes.STRING,
    DateOfBirth: DataTypes.DATE,
    AadhaarNumber: DataTypes.STRING,
    PANNumber: DataTypes.STRING,
    UserImage: DataTypes.BLOB
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};