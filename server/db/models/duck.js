'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Duck extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Duck.init(
    {
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      img: {
        type: DataTypes.TEXT,
      },
      /* умеет крякать */
      canQuack: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: 'Duck',
    }
  );
  return Duck;
};
