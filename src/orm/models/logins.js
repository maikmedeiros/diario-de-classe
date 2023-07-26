'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class logins extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      logins.belongsTo(models.pessoas, {
        foreignKey: { name: 'idPessoa', allowNull: false },
      });
      logins.belongsTo(models.tipo_login, {
        foreignKey: { name: 'idTipoLogin', allowNull: false },
      });
    }
  }
  logins.init(
    {
      login: DataTypes.STRING,
      senha: DataTypes.STRING,
      situacao: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'logins',
    },
  );
  return logins;
};
