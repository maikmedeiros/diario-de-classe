'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class situacao_matricula extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      situacao_matricula.hasOne(models.alunos, {
        foreignKey: { name: 'idSituacaoMatricula', allowNull: false },
      });
    }
  }
  situacao_matricula.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'situacao_matricula',
  });
  return situacao_matricula;
};