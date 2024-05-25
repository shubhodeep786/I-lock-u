'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DID extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DID.init({
    ID: DataTypes.STRING,
    Controller: DataTypes.STRING,
    Created: DataTypes.DATE,
    Updated: DataTypes.DATE,
    DIDDocument: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'DID',
  });
  return DID;
};