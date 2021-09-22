'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Job.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE'
      });
      Job.hasMany(models.Weld, {
        foreignKey: 'jobId'
      })
    }
  };
  Job.init({
    job_number: DataTypes.STRING,
    purchase_order: DataTypes.STRING,
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    estimate: DataTypes.STRING,
    expected_complete: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Job',
  });
  return Job;
};