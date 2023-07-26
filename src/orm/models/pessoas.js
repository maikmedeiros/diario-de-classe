'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pessoas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      pessoas.hasOne(models.login, {
        foreignKey: { name: 'idPessoa', allowNull: false },
      });
    }
  }
  pessoas.init(
    {
      nome: DataTypes.STRING,
      dtNascimento: DataTypes.DATE,
      cpf: DataTypes.STRING,
      email: DataTypes.STRING,
      rg: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'pessoas',
    },
  );
  return pessoas;
};
