'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class responsaveis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      responsaveis.belongsTo(models.pessoas, {
        foreignKey: { name: 'idPessoaResposavel', allowNull: false },
      });
      responsaveis.belongsTo(models.pessoas, {
        foreignKey: { name: 'idPessoaAluno', allowNull: false },
      });
    }
  }
  responsaveis.init(
    {},
    {
      sequelize,
      modelName: 'responsaveis',
    },
  );
  return responsaveis;
};
