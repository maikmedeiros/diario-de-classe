'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class alunos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      alunos.belongsTo(models.situacao_matricula, {
        foreignKey: { name: 'idSituacaoMatricula', allowNull: false },
      });
    }
  }
  alunos.init(
    {
      ra: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'alunos',
    },
  );
  return alunos;
};
