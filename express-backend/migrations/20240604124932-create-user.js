'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      UserID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true // Ensures the UserID is unique
      },
      Name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      PhoneNumber: {
        type: Sequelize.STRING,
        allowNull: true
      },
      LoginPIN: {
        type: Sequelize.STRING,
        allowNull: false
      },
      DateOfBirth: {
        type: Sequelize.DATE,
        allowNull: true
      },
      AadhaarNumber: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
      },
      PANNumber: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
      },
      UserImage: {
        type: Sequelize.BLOB,
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
    await queryInterface.dropTable('Users');
  }
};
