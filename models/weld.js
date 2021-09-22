'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Weld extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     Weld.belongsTo(models.Job, {
       foreignKey: 'jobId',
       onDelete: 'CASCADE'
     })
    }
  };
  Weld.init({
    weldId: DataTypes.STRING,
    partNumber1: DataTypes.STRING,
    partNumber2: DataTypes.STRING,
    jobId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Weld',
  });
  return Weld;
};