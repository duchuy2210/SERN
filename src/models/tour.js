'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tour extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tour.init({
    tour_guideId: DataTypes.INTEGER,
    continentId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    route: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    video: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'Tour',
  });
  return Tour;
};