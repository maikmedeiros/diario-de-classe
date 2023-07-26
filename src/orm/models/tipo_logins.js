'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tipo_logins extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      tipo_login.hasOne(models.logins, {
        foreignKey: { name: 'idTipoLogin', allowNull: false },
      });
    }
  }
  tipo_login.init(
    {
      nome: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'tipo_login',
    },
  );
  return tipo_logins;
};
