'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Resources', {
      ResourceID: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      DIDID: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'DIDs',
          key: 'ID'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      Payload: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Resources');
  }
};
