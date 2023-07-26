'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('responsaveis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      idPessoaResposavel: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'pessoas',
          key: 'id',
        },
      },
      idPessoaAluno: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'pessoas',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('responsaveis');
  },
};
